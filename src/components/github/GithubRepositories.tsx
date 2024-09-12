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
import { GithubProvider, useGithubProvider } from "./GithubContext";

type ConnectionTableProps = {
  title: string;
};

const GithubTable = ({ title }: Readonly<ConnectionTableProps>) => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "owner", label: "Owner" },
    { id: "name", label: "Repository nane" },
    { id: "url", label: "URL" },
    { id: "date_created", label: "Created" },
  ];

  const { reloadRepositories, repositories } = useGithubProvider();

  useEffect(() => {
    reloadRepositories();
  }, [reloadRepositories]);

  return (
    <div className="border border-indigo-600 mt-5">
      <Table aria-label={title}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.id}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No connections yet" items={repositories}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.url}</TableCell>
              <TableCell>{item.date_created}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default function GithubRepositories({
  title,
}: Readonly<ConnectionTableProps>) {
  return (
    <GithubProvider>
      <GithubTable title={title} />
    </GithubProvider>
  );
}
