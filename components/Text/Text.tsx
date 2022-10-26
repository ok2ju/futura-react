import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <p className="my-4 text-base font-light leading-relaxed">{children}</p>
  );
};

export default Text;
