import type { FC } from 'react';
import { memo } from 'react';
import type { TSVGIcon } from './types';

export const IconClose: FC<TSVGIcon> = memo(props => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.32289 3.32289C2.89237 3.7534 2.89237 4.45141 3.32289 4.88192L6.44096 8L3.32289 11.1181C2.89237 11.5486 2.89237 12.2466 3.32289 12.6771C3.7534 13.1076 4.45141 13.1076 4.88192 12.6771L8 9.55904L11.1181 12.6771C11.5486 13.1076 12.2466 13.1076 12.6771 12.6771C13.1076 12.2466 13.1076 11.5486 12.6771 11.1181L9.55904 8L12.6771 4.88192C13.1076 4.45141 13.1076 3.7534 12.6771 3.32289C12.2466 2.89237 11.5486 2.89237 11.1181 3.32289L8 6.44096L4.88192 3.32289C4.45141 2.89237 3.7534 2.89237 3.32289 3.32289Z"
      fill="currentColor" />
  </svg>
));

IconClose.displayName = 'IconClose';

export default IconClose;
