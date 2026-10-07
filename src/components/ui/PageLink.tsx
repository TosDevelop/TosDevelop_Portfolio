import type { ComponentProps } from 'react';
import { getPagePath, type AppTab } from '@/config/navigation';

type PageLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  tab: AppTab;
  memberId?: string;
  projectId?: string;
};

export function PageLink({
  tab,
  memberId,
  projectId,
  onClick,
  children,
  ...props
}: PageLinkProps) {
  return (
    <a
      {...props}
      href={getPagePath(tab, memberId, projectId)}
      onClick={(event) => {
        if (
          !onClick ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          (props.target && props.target !== '_self') ||
          props.download
        )
          return;
        event.preventDefault();
        onClick(event);
      }}
    >
      {children}
    </a>
  );
}
