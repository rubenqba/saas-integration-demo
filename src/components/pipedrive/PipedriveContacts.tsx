"use client";

import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { PipedriveProvider, usePipedriveProvider } from "./PipedriveContext";
import { formatDistance } from "date-fns";

type ConnectionTableProps = {
  title: string;
  connection: string;
};

const PipedriveContactsTable = ({
  title,
  connection,
}: Readonly<ConnectionTableProps>) => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Contact name" },
    { id: "email", label: "Contact email" },
    { id: "company", label: "Company" },
    { id: "date_created", label: "Created" },
  ];

  const { isLoading, contacts, reloadContacts } = usePipedriveProvider();

  useEffect(() => {
    reloadContacts(connection);
  }, [connection, reloadContacts]);

  return (
    <div className="border border-indigo-600 mt-5">
      <Table aria-label={title}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.id}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent="No contacts yet"
          items={contacts}
          isLoading={isLoading}
          loadingContent={<Spinner color="primary" />}
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.emails?.map((email) => email.email).join(",")}
              </TableCell>
              <TableCell>{item.company_name}</TableCell>
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
  );
};

export default function PipedriveContacts({
  title,
  connection,
}: Readonly<ConnectionTableProps>) {
  return (
    <PipedriveProvider>
      <PipedriveContactsTable title={title} connection={connection} />
    </PipedriveProvider>
  );
}
