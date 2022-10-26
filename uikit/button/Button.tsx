import { SyntheticEvent } from 'react';

export enum SIZE {
  small = 'small',
  default = 'default',
  medium = 'medium',
  big = 'big',
}

const sizes = {
  [SIZE.small]: 'text-xs px-5 py-2',
  [SIZE.default]: 'text-sm px-5 py-2',
  [SIZE.medium]: 'text-base px-5 py-2.5',
  [SIZE.big]: 'text-base px-5 py-3',
};

export enum TYPE {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}

const types = {
  [TYPE.primary]:
    'bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500',
  [TYPE.secondary]: 'bg-blue-600 hover:bg-blue-700 text-white',
  [TYPE.danger]: 'bg-red-500 hover:bg-red-600 text-white',
};

interface ButtonProps {
  title: string;
  size?: SIZE;
  type?: TYPE;
  disabled?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

export const Button = ({
  title,
  size = SIZE.default,
  type = TYPE.primary,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg disabled:text-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed ${sizes[size]} ${types[type]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
