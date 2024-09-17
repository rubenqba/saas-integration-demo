import React from "react";
import { Integration } from "@model/integrations";
import ApideckIntegration from "./ApideckIntegration";

type IntegrationVaultProps = {
  token: string | null;
  integrations: Integration[];
  className?: string;
};

export default function IntegrationVault({
  token,
  integrations,
  className,
}: Readonly<IntegrationVaultProps>) {
  const showIntegrations = token
    ? integrations.map((provider) => (
        <ApideckIntegration
          key={provider.id}
          token={token}
          provider={provider}
        />
      ))
    : [];

  return <div className={className}>{showIntegrations}</div>;
}
