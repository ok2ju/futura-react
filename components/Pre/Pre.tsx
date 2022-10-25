import { ReactNode } from 'react';

interface PreProps {
  children: ReactNode;
}

const Pre = ({ children }: PreProps) => {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
};

export default Pre;
