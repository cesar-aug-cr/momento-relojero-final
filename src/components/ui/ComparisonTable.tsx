'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface ComparisonColumn {
  header: string;
  items: (string | boolean)[];
  highlighted?: boolean;
}

interface ComparisonTableProps {
  rowHeaders: string[];
  columns: ComparisonColumn[];
  className?: string;
}

export const ComparisonTable: FC<ComparisonTableProps> = ({
  rowHeaders,
  columns,
  className
}) => {
  const renderCell = (item: string | boolean) => {
    if (typeof item === 'boolean') {
      return item ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" />
      );
    }
    return <span className="text-slate-700">{item}</span>;
  };

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-900">
            <th className="p-4 text-left text-white font-semibold">Feature</th>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={cn(
                  'p-4 text-center font-semibold',
                  col.highlighted
                    ? 'bg-amber-600 text-white'
                    : 'text-white'
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowHeaders.map((header, rowIdx) => (
            <tr
              key={rowIdx}
              className={cn(
                'border-b border-slate-200',
                rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              )}
            >
              <td className="p-4 font-medium text-slate-900">{header}</td>
              {columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  className={cn(
                    'p-4 text-center',
                    col.highlighted && 'bg-amber-50'
                  )}
                >
                  {renderCell(col.items[rowIdx])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ComparisonTable.displayName = 'ComparisonTable';
