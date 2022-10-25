import { ReactNode } from 'react';

interface ExampleAreaProps {
  height?: string;
  children: ReactNode;
}

const ExampleArea = ({ height, children }: ExampleAreaProps) => {
  return (
    <div className="w-full mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center p-16">
      {children}
    </div>
  );
};

export default ExampleArea;
