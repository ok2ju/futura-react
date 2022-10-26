/* eslint-disable react/display-name */
import { forwardRef, ComponentProps, ElementRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export const Root = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  ComponentProps<typeof AccordionPrimitive.Root>
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className="rounded-[6px] shadow bg-slate-200"
    {...props}
  >
    {children}
  </AccordionPrimitive.Root>
));

export const Item = ({
  children,
  ...props
}: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    className="overflow-hidden mt-[1px] first:mt-0 first:rounded-t-[4px] last:rounded-b-[4px] focus-within:relative focus-within:z-1"
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
);

export const Header = forwardRef<
  ElementRef<typeof AccordionPrimitive.AccordionTrigger>,
  AccordionPrimitive.AccordionTriggerProps
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className="h-[45px] text-left bg-white text-gray-700 flex flex-1 px-5 items-center justify-between text-sm shadow-[0_1px_0_#e4e2e4] hover:bg-slate-50"
      {...props}
    >
      {children}
      <ChevronDownIcon aria-hidden className="shrink-0" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

export const Content = ({
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    className="overflow-hidden bg-white text-sm font-light text-slate-500"
    {...props}
  >
    <div className="px-5 py-4">{children}</div>
  </AccordionPrimitive.Content>
);
