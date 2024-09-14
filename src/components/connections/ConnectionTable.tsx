"use client";

import ProviderImage from "@component/integrations/ProviderImage";
import { Connection } from "@model/connections";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { formatDistance } from "date-fns";

type ConnectionTableProps = {
  title: string;
  connections: Connection[];
};

export default function ConnectionTable({
  title,
  connections,
}: Readonly<ConnectionTableProps>) {
  const columns = [
    { id: "id", label: "ID" },
    { id: "provider", label: "Provider" },
    { id: "environment", label: "Environment" },
    { id: "categories", label: "Categories" },
    { id: "paused", label: "Status" },
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
                <TableCell className="text-indigo-600 font-semibold">
                  {item.id}
                </TableCell>
                <TableCell>
                  <ProviderImage provider={item.integrationType} />
                </TableCell>
                <TableCell>{item.environment}</TableCell>
                <TableCell>
                  {item.categories.map((c) => (
                    <Chip key={c} color="primary" variant="flat">
                      {c}
                    </Chip>
                  ))}
                </TableCell>
                <TableCell>{item.isPaused ? "Paused" : "Active"}</TableCell>
                <TableCell>
                  {formatDistance(item.createdAt, Date.now(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
