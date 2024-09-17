"use server";

import Apideck from "@apideck/node";
import environment from "@lib/environment";
import session from "@lib/session";
import { Connection } from "@model/connections";

export async function getConnections(): Promise<{
  data: Connection[] | null;
  error?: string;
}> {
  const apideck = new Apideck({
    apiKey: environment.APIDECK_SECRET_KEY,
    appId: environment.APIDECK_APP_ID,
    consumerId: session.user_id,
  });

  const { status_code, status, data } = await apideck.vault.consumersOne({
    consumerId: session.user_id,
  });

  if (status_code !== 200) {
    console.error("Failed to fetch connections", data);
    return { error: status, data: null };
  }

  console.debug("Connections", data);

  return { data: data.connections ?? [] };
}
