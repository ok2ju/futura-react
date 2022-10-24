import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
// type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

const Accordion = () => {
  return (
    <AccordionPrimitive.Root
      collapsible
      type="single"
      defaultValue="one"
      className="rounded-[6px] shadow bg-slate-200"
    >
      <AccordionPrimitive.Item
        value="one"
        className="overflow-hidden relative z-1 mt-[1px] first:mt-0 first:rounded-t-[4px] last:rounded-b-[4px]"
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger className="h-[45px] bg-white text-gray-700 flex flex-1 px-5 items-center justify-between text-sm leading-10 shadow-[0_1px_0_#e4e2e4] hover:bg-slate-50">
            One
            <ChevronDownIcon aria-hidden />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden bg-white text-sm font-light text-slate-400 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <div className="px-5 py-4">
            Per erat orci nostra luctus sociosqu mus risus penatibus, duis elit
            vulputate viverra integer ullamcorper congue curabitur sociis, nisi
            malesuada scelerisque quam suscipit habitant sed.
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item
        value="two"
        className="overflow-hidden relative z-1 mt-[1px] first:mt-0 first:rounded-t-[4px] last:rounded-b-[4px]"
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger className="h-[45px] bg-white text-gray-700 flex flex-1 px-5 items-center justify-between text-sm leading-10 shadow-[0_1px_0_#e4e2e4] hover:bg-slate-50">
            Two
            <ChevronDownIcon aria-hidden />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden bg-white text-sm font-light text-slate-400 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <div className="px-5 py-4">
            Cursus sed mattis commodo fermentum conubia ipsum pulvinar sagittis,
            diam eget bibendum porta nascetur ac dictum, leo tellus dis integer
            platea ultrices mi.
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
