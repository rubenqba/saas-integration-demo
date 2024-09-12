"use client";

import { NangoConnection } from "@model/connections";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";

type ConnectionTableProps = {
  title: string;
  connections: NangoConnection[];
};

export default function ConnectionTable({
  title,
  connections,
}: Readonly<ConnectionTableProps>) {
  const columns = [
    { id: "id", label: "ID" },
    { id: "provider", label: "Provider" },
    { id: "key", label: "Provider Config Key" },
    { id: "created", label: "Created" },
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="border border-indigo-600 mt-5">
        <Table aria-label={title}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.id}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent="No connections yet" items={connections}>
            {(item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.provider}</TableCell>
                <TableCell>{item.provider_config_key}</TableCell>
                <TableCell>{item.created}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
