import { ReactNode } from 'react';
import cx from 'classnames';

interface TableProps {
  className?: string;
  children: ReactNode;
}

export const Table = ({ className, children }: TableProps) => (
  <table className={cx(className, 'w-full table-fixed border-spacing-0')}>
    {children}
  </table>
);

interface TableHeadProps {
  className?: string;
  children: ReactNode;
}

export const TableHead = ({ className, children }: TableHeadProps) => (
  <thead className={className}>{children}</thead>
);

interface TableHeadRowProps {
  className?: string;
  children: ReactNode;
}

export const TableHeadRow = ({ className, children }: TableHeadRowProps) => (
  <tr className={className}>{children}</tr>
);

interface TableHeadCellProps {
  className?: string;
  children: ReactNode;
}

export const TableHeadCell = ({ className, children }: TableHeadCellProps) => (
  <th
    className={cx(
      className,
      'text-start py-2 text-xs text-slate-400 font-normal',
      'border-b border-solid border-slate-300'
    )}
  >
    {children}
  </th>
);

interface TableBodyProps {
  className?: string;
  children: ReactNode;
}

export const TableBody = ({ className, children }: TableBodyProps) => (
  <tbody className={cx(className, 'w-full')}>{children}</tbody>
);

interface TableRowProps {
  className?: string;
  children: ReactNode;
}

export const TableRow = ({ className, children }: TableRowProps) => (
  <tr className={className}>{children}</tr>
);

interface TableCellProps {
  className?: string;
  children: ReactNode;
}

export const TableCell = ({ className, children }: TableCellProps) => (
  <td
    className={cx(
      className,
      'text-xs text-slate-800 font-normal',
      'border-b border-solid border-slate-300 text-start py-2'
    )}
  >
    {children}
  </td>
);
