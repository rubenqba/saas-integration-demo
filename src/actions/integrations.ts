import Apideck from "@apideck/node";
import environment from "@lib/environment";
import session from "@lib/session";
import { Integration } from "@model/integrations";

export async function getIntegrations(): Promise<{
  data: Integration[] | null;
  error?: string;
}> {
  const apideck = new Apideck({
    apiKey: environment.APIDECK_SECRET_KEY,
    appId: environment.APIDECK_APP_ID,
    consumerId: session.user_id,
  });

  const { status_code, status, data } = await apideck.vault.connectionsAll();

  if (status_code !== 200) {
    console.error("Failed to fetch integrations", data);
    return { error: status, data: null };
  }
  console.debug("Integrations", data);

  return { data };
}
