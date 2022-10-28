import * as Popover from '@radix-ui/react-popover';
import cx from 'classnames';

export const Root = Popover.Root;
export const Trigger = Popover.Trigger;

export const Arrow = ({ children, ...other }: Popover.PopoverArrowProps) => (
  <Popover.Arrow {...other}>{children}</Popover.Arrow>
);

export const Close = ({ children, ...other }: Popover.PopoverCloseProps) => (
  <Popover.Close
    {...other}
    className={cx(
      'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
    )}
  >
    {children}
  </Popover.Close>
);

export const Content = ({
  children,
  ...other
}: Popover.PopoverContentProps) => (
  <Popover.Content
    {...other}
    className={cx(
      'data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down',
      'w-48 rounded-lg p-4 shadow-md',
      'bg-white'
    )}
  >
    {children}
  </Popover.Content>
);
