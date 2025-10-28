import { memo } from 'react';
import type { FC } from 'react';
import type { TSVGIcon } from './types';

const IconDelete: FC<TSVGIcon> = memo(props => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.26756 4C6.61337 3.4022 7.25972 3 8 3C8.74028 3 9.38663 3.4022 9.73244 4H6.26756ZM4.12602 4C4.57006 2.27477 6.13616 1 8 1C9.86384 1 11.4299 2.27477 11.874 4H11.9852C11.9942 3.99988 12.0032 3.99988 12.0123 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H12.895L12.0433 13.6656C11.9589 14.4253 11.3168 15 10.5524 15H5.44749C4.68316 15 4.04107 14.4253 3.95666 13.6656L3.10492 6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H3.98764C3.9967 3.99988 4.00574 3.99988 4.01475 4H4.12602ZM5.89501 13L5.11723 6H10.8827L10.1049 13H5.89501Z"
      fill="currentColor"
    />
  </svg>
));

IconDelete.displayName = 'IconDelete';

export { IconDelete };
