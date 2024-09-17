"use client";

import ProviderImage from "@component/integrations/ProviderImage";
import { Connection } from "@model/connections";
import {
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
    { id: "service_id", label: "Provider" },
    { id: "unified_api", label: "Category" },
    { id: "state", label: "Status" },
    { id: "created_at", label: "Created" },
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
                  <div className="flex items-center gap-2 ">
                    <ProviderImage provider={item.service_id ?? "undefined"} />
                    <span className="ml-2">{item.name}</span>
                  </div>
                </TableCell>
                <TableCell>{item.unified_api}</TableCell>
                <TableCell>
                  {item.state === "callable" ? "Active" : "Not used"}
                </TableCell>
                <TableCell>
                  {item.created_at
                    ? formatDistance(item.created_at, Date.now(), {
                        addSuffix: true,
                      })
                    : ""}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
