export const code = `import React from 'react';
import * as Accordion from '@futura-react/accordion';

export const AccordionDemo = () => (
  <Accordion.Root type="single" defaultValue="item-1" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Header>Is it accessible?</Accordion.Header>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Header>Is it unstyled?</Accordion.Header>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Accordion.Header>Can it be animated?</Accordion.Header>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
`;
