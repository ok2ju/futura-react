interface DocSectionProps {
  anchor: string;
  title: string;
  description: string;
}

const DocSection = ({ anchor, title, description }: DocSectionProps) => {
  return (
    <div className="mb-[16px]">
      <a href={`#${anchor}`}>
        <h1 className="text-[28px] font-semibold">{title}</h1>
      </a>
      <p className="text-[18px] font-light">{description}</p>
    </div>
  );
};

export default DocSection;
