import type { Theme } from '../../types/index.ts';

export type WaterPlacement = 'page' | 'hero';

/** Canvas drawing only; the React component owns sizing and animation lifecycle. */
export function createWaterRenderer(
  context: CanvasRenderingContext2D,
  theme: Theme,
  placement: WaterPlacement,
) {
  const dark = theme === 'dark';
  const droplets = Array.from({ length: 220 }, (_, i) => ({
    x: ((i * 137.508) % 997) / 997,
    offset: Math.sin(i * 73.17) * (24 + (i % 67)),
    radius: 0.5 + (i % 5) * 0.25,
    phase: i * 2.399,
  }));

  return (width: number, height: number, time: number) => {
    const center = (x: number, phase: number) =>
      height * (placement === 'hero' ? 0.5 : 0.56) +
      Math.sin(x * Math.PI * 2.2 - phase) * height * 0.16 +
      Math.sin(x * Math.PI * 4 + phase * 0.5) * height * 0.025;

    context.clearRect(0, 0, width, height);
    if (!width || !height) return;
    const phase = time * 0.24;
    context.globalCompositeOperation = dark ? 'screen' : 'source-over';
    const glow = context.createRadialGradient(
      width * 0.65,
      height * 0.5,
      0,
      width * 0.65,
      height * 0.5,
      width * 0.65,
    );
    glow.addColorStop(
      0,
      dark ? 'rgba(0, 130, 230, 0.13)' : 'rgba(14, 165, 233, 0.07)',
    );
    glow.addColorStop(1, 'rgba(0, 100, 210, 0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    // Overlapping fine ribbons make the flow look folded and translucent.
    for (let strand = 0; strand < 42; strand++) {
      const band = (strand / 41 - 0.5) * height * 0.14;
      context.beginPath();
      for (let step = 0; step <= 140; step++) {
        const x = step / 140;
        const twist = Math.sin(x * 11 - phase * 1.3 + strand * 0.14);
        const ripple = Math.sin(x * 37 + phase * 2 + strand * 0.7) * 3;
        const y = center(x, phase) + band * twist + ripple;
        if (step === 0) context.moveTo(x * width, y);
        else context.lineTo(x * width, y);
      }
      const color = context.createLinearGradient(0, 0, width, 0);
      const alpha =
        strand % 6 === 0 ? (dark ? 0.65 : 0.25) : dark ? 0.19 : 0.075;
      color.addColorStop(0, `rgba(14, 165, 233, ${alpha * 0.3})`);
      color.addColorStop(0.3, `rgba(56, 189, 248, ${alpha})`);
      color.addColorStop(
        0.65,
        dark ? `rgba(165, 243, 252, ${alpha})` : `rgba(2, 132, 199, ${alpha})`,
      );
      color.addColorStop(1, `rgba(14, 165, 233, ${alpha * 0.35})`);
      context.strokeStyle = color;
      context.lineWidth = strand % 6 === 0 ? 1.8 : 0.75;
      context.stroke();
    }
    for (const drop of droplets) {
      const x = (drop.x + time * 0.015) % 1;
      const y =
        center(x, phase) + drop.offset + Math.sin(time + drop.phase) * 9;
      context.beginPath();
      context.arc(x * width, y, drop.radius, 0, Math.PI * 2);
      context.fillStyle = dark
        ? 'rgba(125, 211, 252, 0.5)'
        : 'rgba(2, 132, 199, 0.22)';
      context.fill();
    }
    context.globalCompositeOperation = 'source-over';
  };
}
