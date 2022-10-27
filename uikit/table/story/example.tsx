/* eslint-disable react/jsx-key */
import { useMemo } from 'react';
import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { useTable, Column, HeaderGroup } from 'react-table';
import * as TablePrimitive from '../';

interface ClubResults {
  club: string;
  mp: string;
  w: string;
  d: string;
  l: string;
  gf: string;
  ga: string;
  gd: string;
  pts: string;
  lastFive: Array<number>;
}

type EnhancedColumn = Column<ClubResults> & { className?: string };
type EnhancedHeaderGroup = HeaderGroup<ClubResults> & { className?: string };

const TableExample = () => {
  const data: ClubResults[] = useMemo(
    () => [
      {
        club: 'Man United',
        mp: '32',
        w: '32',
        d: '32',
        l: '32',
        gf: '32',
        ga: '32',
        gd: '32',
        pts: '32',
        lastFive: [1, 1, 1, 1, 1],
      },
      {
        club: 'Man City',
        mp: '32',
        w: '32',
        d: '32',
        l: '32',
        gf: '32',
        ga: '32',
        gd: '32',
        pts: '32',
        lastFive: [1, 1, 1, 0, 1],
      },
      {
        club: 'Chelsea',
        mp: '32',
        w: '32',
        d: '32',
        l: '32',
        gf: '32',
        ga: '32',
        gd: '32',
        pts: '32',
        lastFive: [1, 1, 0, 1, 0],
      },
      {
        club: 'Leicester City',
        mp: '32',
        w: '32',
        d: '32',
        l: '32',
        gf: '32',
        ga: '32',
        gd: '32',
        pts: '32',
        lastFive: [1, 1, 0, 0, 0],
      },
      {
        club: 'West Ham',
        mp: '32',
        w: '32',
        d: '32',
        l: '32',
        gf: '32',
        ga: '32',
        gd: '32',
        pts: '32',
        lastFive: [1, 1, 0, 0, 0],
      },
    ],
    []
  );

  const columns = useMemo<EnhancedColumn[]>(
    () => [
      {
        Header: 'Club',
        accessor: 'club', // accessor is the "key" in the data
        className: 'w-[200px]',
      },
      {
        Header: 'MP',
        accessor: 'mp',
        className: '',
      },
      {
        Header: 'W',
        accessor: 'w',
        className: '',
      },
      {
        Header: 'D',
        accessor: 'd',
        className: '',
      },
      {
        Header: 'L',
        accessor: 'l',
        className: '',
      },
      {
        Header: 'GF',
        accessor: 'gf',
        className: '',
      },
      {
        Header: 'GA',
        accessor: 'ga',
        className: '',
      },
      {
        Header: 'GD',
        accessor: 'gd',
        className: '',
      },
      {
        Header: 'Pts',
        accessor: 'pts',
        className: '',
      },
      {
        Header: 'Last 5',
        accessor: 'lastFive',
        className: 'w-[100px]',
        Cell: ({ value }: { value: Array<number> }) => {
          return (
            <div className="flex space-x-0.5 [&>svg]:shrink-0">
              {value?.map((s, idx) =>
                s === 1 ? (
                  <CheckCircledIcon key={idx} className="text-green-600" />
                ) : (
                  <CrossCircledIcon key={idx} className="text-red-600" />
                )
              )}
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TablePrimitive.Table {...getTableProps()}>
      <TablePrimitive.TableHead>
        {headerGroups.map((headerGroup) => (
          <TablePrimitive.TableHeadRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: EnhancedHeaderGroup) => (
              <TablePrimitive.TableHeadCell
                {...column.getHeaderProps()}
                className={column.className}
              >
                {column.render('Header')}
              </TablePrimitive.TableHeadCell>
            ))}
          </TablePrimitive.TableHeadRow>
        ))}
      </TablePrimitive.TableHead>
      <TablePrimitive.TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TablePrimitive.TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TablePrimitive.TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TablePrimitive.TableCell>
                );
              })}
            </TablePrimitive.TableRow>
          );
        })}
      </TablePrimitive.TableBody>
    </TablePrimitive.Table>
  );
};

export default TableExample;
