import { useState, ReactNode } from 'react';
import DocCodeBlock from '../DocCodeBlock';

interface ExampleAreaProps {
  code?: string;
  children: ReactNode;
}

const ExampleArea = ({ code, children }: ExampleAreaProps) => {
  const [open, toggleOpen] = useState(false);

  const handleOpenCode = () => {
    toggleOpen(!open);
  };

  return (
    <div className="mb-8">
      <div className="w-full mb-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex items-center justify-center p-16">{children}</div>
        {code && (
          <div className="flex justify-end px-4 py-4">
            <button onClick={handleOpenCode} className="text-white text-xs">
              {open ? 'Hide' : 'Show'} code
            </button>
          </div>
        )}
      </div>
      {code && open && <DocCodeBlock code={code} language="jsx" />}
    </div>
  );
};

export default ExampleArea;
