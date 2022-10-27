import cx from 'classnames';

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
}

interface PropsTableProps {
  data: Array<PropDefinition>;
}

const headerCellClasses = cx(
  'text-start py-2 text-sm text-slate-400 font-light',
  'border-b border-solid border-slate-300'
);

const cellClasses = cx(
  'text-sm text-slate-600 font-normal',
  'border-b border-solid border-slate-300 text-start py-4'
);

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <table className="w-full table-fixed border-spacing-0 mt-2 mb-8">
      <thead>
        <tr>
          <th className={headerCellClasses}>Prop</th>
          <th className={headerCellClasses}>Type</th>
          <th className={headerCellClasses}>Default</th>
        </tr>
      </thead>
      <tbody className="w-full">
        {data.map((row, idx) => (
          <tr key={idx}>
            <td className={cellClasses}>
              <span className="p-1 bg-[#fbfaff] text-[#5746af] rounded-sm">
                {row.name}
              </span>
            </td>
            <td className={cellClasses}>{row.type}</td>
            <td className={cellClasses}>{row.default || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropsTable;
