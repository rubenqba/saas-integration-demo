"use client";

import React, { useState } from "react";
import Nango from "@nangohq/frontend";
import { NangoIntegration } from "@model/integrations";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaBolt } from "react-icons/fa";
import session from "@lib/session";

const nango = process.env.NEXT_PUBLIC_NANGO_PUBLIC_KEY
  ? new Nango({
      publicKey: process.env.NEXT_PUBLIC_NANGO_PUBLIC_KEY,
    })
  : null;

type IntegrationProps = {
  integration: NangoIntegration;
  className?: string;
};

function NangoIntegrationCard({
  integration,
  className,
}: Readonly<IntegrationProps>) {
  const [loading, setLoading] = useState<boolean>(false);
  // const [result, setResult] = useState<string>();

  const connect = async () => {
    try {
      setLoading(true);
      if (!nango) {
        throw new Error("Nango not initialized");
      }
      const { connectionId } = await nango.auth(
        integration.unique_key,
        session.user_id,
        { detectClosedAuthWindow: true }
      );
      toast.success(`Successful connection: ${connectionId}`);
    } catch (err) {
      console.error(err);
      toast.error(
        err instanceof Error ? err.message : "An error happened during oauth"
      );
    }
    setLoading(false);
  };

  return (
    <Card className={`max-w-[300px] ${className}`}>
      <CardHeader className="flex gap-3">
        <Image
          alt={integration.provider}
          height={40}
          radius="sm"
          src={`/${integration.provider}.svg`}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md capitalize">{integration.provider}</p>
          <p className="text-small text-default-500">
            {integration.unique_key}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          className="bg-indigo-600 text-white"
          size="sm"
          variant="bordered"
          isLoading={loading}
          endContent={<FaBolt />}
          onClick={connect}
        >
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NangoIntegrationCard;
