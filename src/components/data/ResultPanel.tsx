"use client";
import GithubRepositories from "@component/github/GithubRepositories";
import PipedriveContacts from "@component/pipedrive/PipedriveContacts";
import { NangoConnection } from "@model/connections";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";

type ResultPanelProps = {
  title: string;
  providers: NangoConnection[];
};

export default function ResultPanel({
  title,
  providers,
}: Readonly<ResultPanelProps>) {
  const render = (item: NangoConnection) => {
    const selectComponent = () => {
      switch (item.provider) {
        case "github":
          return <GithubRepositories title={item.provider} />;
        default:
          return <PipedriveContacts title={item.provider} />;
      }
    };
    return (
      <Tab key={item.id} title={item.provider}>
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
