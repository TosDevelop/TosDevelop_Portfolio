import { useEffect, useRef } from 'react';
import { useTheme } from '@/providers/ThemeContext';
import { createWaterRenderer, type WaterPlacement } from './waterRenderer';

const FRAME_INTERVAL_MS = 1000 / 30;
const MAX_FRAME_DELTA_SECONDS = 0.05;
const MAX_PIXEL_RATIO = 1.5;

/** A procedural water ribbon: translucent strands and droplets, without video downloads. */
export function WaterBackground({
  placement = 'page',
}: {
  placement?: WaterPlacement;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let frame = 0;
    let previous = 0;
    let time = 0;
    let visible = true;
    const render = createWaterRenderer(context, theme, placement);
    const draw = () => render(width, height, time);

    const tick = (stamp: number) => {
      frame = 0;
      if (!visible || document.hidden || reducedMotion.matches) return;
      if (stamp - previous >= FRAME_INTERVAL_MS) {
        time += Math.min((stamp - previous) / 1000, MAX_FRAME_DELTA_SECONDS);
        previous = stamp;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = performance.now();
      draw();
      if (visible && !document.hidden && !reducedMotion.matches)
        frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      sync();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersectionObserver.observe(canvas);
    reducedMotion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [theme, placement]);

  return (
    <canvas
      ref={canvasRef}
      className={`water-background water-background--${placement}`}
      aria-hidden="true"
    />
  );
}
