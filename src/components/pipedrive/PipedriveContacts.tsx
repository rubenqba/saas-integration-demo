"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { PipedriveProvider, usePipedriveProvider } from "./PipedriveContext";

type ConnectionTableProps = {
  title: string;
};

const PipedriveContactsTable = ({ title }: Readonly<ConnectionTableProps>) => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Contact name" },
    { id: "email", label: "Contact email" },
    { id: "label", label: "Labels" },
    { id: "date_created", label: "Created" },
  ];

  const { contacts, reloadContacts } = usePipedriveProvider();

  useEffect(() => {
    reloadContacts();
  }, [reloadContacts]);

  return (
    <div className="border border-indigo-600 mt-5">
      <Table aria-label={title}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.id}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No contacts yet" items={contacts}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.cc_email}</TableCell>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.add_time}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default function PipedriveContacts({
  title,
}: Readonly<ConnectionTableProps>) {
  return (
    <PipedriveProvider>
      <PipedriveContactsTable title={title} />
    </PipedriveProvider>
  );
}
