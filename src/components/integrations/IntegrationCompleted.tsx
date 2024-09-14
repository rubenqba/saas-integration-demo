"use client";
import { Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import ProviderImage from "./ProviderImage";
import session from "@lib/session";

function IntegrationCompleted() {
  const params = useSearchParams();
  console.debug(params);
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">Integration Completed</CardHeader>
      <CardBody>
        <div className="flex gap-4">
          <div className="flex items-center justify-center p-5">
            <ProviderImage provider={params.get("type") || ""} />
          </div>
          <div className="flex flex-col flex-grow">
            <div>
              Provider: <Chip>{params.get("type")}</Chip>
            </div>
            <p>Connection ID: {params.get("id")}</p>
            <p>User: {params.get("state") || session.user_id}</p>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-end">
          <a href="/integrations" className="text-blue-500">
            Go back
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

export default IntegrationCompleted;
