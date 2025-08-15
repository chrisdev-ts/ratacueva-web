import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { Body } from "@/components/atoms/Typography";

interface BaseTableProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  className?: string;
}

function BaseTable<T>({ data, columns, className = "" }: BaseTableProps<T>) {
  const table = useReactTable<T>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={`bg-gray rounded-lg overflow-hidden ${className}`}>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="flex gap-4 px-6 py-5 border-b-2 border-dark">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="flex-1 text-left">
                  {header.isPlaceholder ? null : (
                    <Body className="text-text font-bold uppercase">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Body>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="flex gap-4 px-6 py-4 border-b border-dark last:border-b-0">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="flex-1">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BaseTable;
