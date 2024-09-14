import environment from "@lib/environment";
import { UnifiedTo } from "@unified-api/typescript-sdk";

export async function getIntegrations() {
  const sdk = new UnifiedTo({
    security: {
      jwt: environment.UNIFIED_SECRET_KEY,
    },
  });
  const data = await sdk.integration.listUnifiedIntegrationWorkspaces({
    workspaceId: environment.UNIFIED_WORKSPACE,
  });

  console.debug("Integrations", data);

  return data;
}
