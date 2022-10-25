import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface AccordionItem {
  header: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    header: 'What is Radix UI?',
    content:
      'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.',
  },
  {
    header:
      'Each primitive can be installed individually so you we adopt them incrementally?',
    content: 'Yes!',
  },
  {
    header: 'Is it accessible?',
    content: 'Yes!',
  },
];

const Accordion = () => {
  return (
    <AccordionPrimitive.Root
      collapsible
      type="single"
      defaultValue="item-1"
      className="rounded-[6px] shadow bg-slate-200"
    >
      {items.map((item, idx) => (
        <AccordionPrimitive.Item
          key={idx}
          value={`item-${idx + 1}`}
          className="overflow-hidden mt-[1px] first:mt-0 first:rounded-t-[4px] last:rounded-b-[4px] focus-within:relative focus-within:z-1"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="h-[45px] text-left bg-white text-gray-700 flex flex-1 px-5 items-center justify-between text-sm shadow-[0_1px_0_#e4e2e4] hover:bg-slate-50">
              {item.header}
              <ChevronDownIcon aria-hidden />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden bg-white text-sm font-light text-slate-500">
            <div className="px-5 py-4">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
