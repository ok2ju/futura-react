import { ReactNode } from 'react';
import cx from 'classnames';

export enum HEADING_SIZES {
  xl,
  lg,
  md,
  sm,
}

const headingTypes = {
  [HEADING_SIZES.xl]: 'text-[28px] font-medium mt-11 mb-2.5',
  [HEADING_SIZES.lg]: 'text-[24px] font-medium mb-2.5',
  [HEADING_SIZES.md]: 'text-[20px] font-normal mb-2.5',
  [HEADING_SIZES.sm]: 'text-[18px] font-medium mt-8 mb-2.5',
};

interface HeadingProps {
  anchor?: string;
  size?: HEADING_SIZES;
  children: ReactNode;
}

export const Heading = ({
  anchor,
  size = HEADING_SIZES.xl,
  children,
}: HeadingProps) => (
  <a href={`#${anchor || ''}`}>
    <h1 className={headingTypes[size]}>{children}</h1>
  </a>
);

interface TextProps {
  children: ReactNode;
}

export const Text = ({ children }: TextProps) => (
  <p className={cx('mb-4', 'text-base font-light leading-relaxed')}>
    {children}
  </p>
);
