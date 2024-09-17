"use client";
import PipedriveContacts from "@component/pipedrive/PipedriveContacts";
import { Connection } from "@model/connections";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";

type ResultPanelProps = {
  title: string;
  providers: Connection[];
};

export default function ResultPanel({
  title,
  providers,
}: Readonly<ResultPanelProps>) {
  const render = (item: Connection) => {
    const selectComponent = () => {
      switch (item.service_id) {
        case "pipedrive":
          return <PipedriveContacts title={item.name ?? 'noname'} connection={item.service_id ?? ''}/>;
        default:
          return <div />;
      }
    };
    return (
      <Tab key={item.id} title={item.name}>
        {selectComponent()}
      </Tab>
    );
  };
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <Tabs className="mt-5" items={providers}>
        {(item) => render(item)}
      </Tabs>
    </>
  );
}
