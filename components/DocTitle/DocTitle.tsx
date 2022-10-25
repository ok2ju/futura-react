interface DocTitleProps {
  title: string;
  description: string;
}

const DocTitle = ({ title, description }: DocTitleProps) => {
  return (
    <div className="mb-[46px]">
      <h1 className="text-[36px] font-semibold">{title}</h1>
      <p className="text-[22px] font-light text-slate-500">{description}</p>
    </div>
  );
};

export default DocTitle;
