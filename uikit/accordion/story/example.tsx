import * as Accordion from '..';

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

const AccordionExample = () => {
  return (
    <Accordion.Root collapsible type="single" defaultValue="item-1">
      {items.map((item, idx) => (
        <Accordion.Item key={idx} value={`item-${idx + 1}`}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Content>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionExample;
