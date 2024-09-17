"use client";

import ProviderImage from "@component/integrations/ProviderImage";
import { Integration } from "@model/integrations";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { FaPlugCirclePlus, FaPlugCircleXmark } from "react-icons/fa6";
import { useVault } from "@apideck/vault-react";

type ApideckIntegrationProps = {
  token: string;
  provider: Integration;
  className?: string;
};

export default function ApideckIntegration({
  token,
  provider,
  className,
}: Readonly<ApideckIntegrationProps>) {
  const enabled = provider.state === "callable";
  const { open } = useVault();

  return (
    <Card className={`max-w-[300px] ${className}`}>
      <CardHeader className="flex gap-3">
        <ProviderImage provider={provider.service_id ?? "unidentified"} />
        <div className="flex flex-col flex-grow">
          <p className="text-md capitalize">{provider.name}</p>
          <p className="text-small text-default-500">{provider.service_id}</p>
        </div>
        <div className="justify-self-end">
          <Chip color={enabled ? "success" : "warning"} variant="flat">
            {enabled ? "enabled" : "disabled"}
          </Chip>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{provider.tag_line}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-end">
        {enabled ? (
          <Button
            className="bg-indigo-600 text-white"
            size="sm"
            variant="bordered"
            endContent={<FaPlugCircleXmark />}
            onClick={() => alert("disconnect")}
          >
            Disconnect
          </Button>
        ) : (
          <Button
            className="bg-indigo-600 text-white"
            size="sm"
            variant="bordered"
            endContent={<FaPlugCirclePlus />}
            onClick={() => open({ token, serviceId: provider.service_id })}
          >
            Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
