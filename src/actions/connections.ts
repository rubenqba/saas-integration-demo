"use server";

import environment from "@lib/environment";
import session from "@lib/session";
import { Connection } from "@model/connections";
import { UnifiedTo } from "@unified-api/typescript-sdk";

export async function getConnections() {
  const sdk = new UnifiedTo({
    security: {
      jwt: environment.UNIFIED_SECRET_KEY,
    },
  });
  const data = await sdk.connection.listUnifiedConnections({
    externalXref: session.user_id,
  });

  console.debug("Connections", data);

  return data as Connection[];
}
