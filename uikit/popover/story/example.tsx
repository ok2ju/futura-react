import { MixerHorizontalIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as Popover from '..';

const PopoverExample = ({ boundary }: { boundary: Element | null }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          aria-label="Update dimensions"
          className="rounded-[100%] h-9 w-9 inline-flex items-center justify-center bg-white hover:bg-slate-100"
        >
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>

      <Popover.Content
        align="center"
        sideOffset={4}
        collisionBoundary={boundary}
      >
        <Popover.Arrow className="fill-current text-white" />
        <h3>Popover header</h3>
        <div>Content here</div>
        <Popover.Close>
          <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  );
};

export default PopoverExample;
