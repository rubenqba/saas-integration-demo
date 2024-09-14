"use server";

import environment from "@lib/environment";
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CrmContact } from "@unified-api/typescript-sdk/sdk/models/shared";

export async function getPipedriveContacts(connection_id: string): Promise<{
  data: CrmContact[] | null;
  error?: string;
}> {
  const sdk = new UnifiedTo({
    security: {
      jwt: environment.UNIFIED_SECRET_KEY,
    },
  });

  try {
    const results = await sdk.crm.listCrmContacts({
      connectionId: connection_id,
      limit: 10,
      offset: 0,
      sort: "updated_at",
      order: "desc",
    });
    // console.debug(JSON.stringify(results, null, 2));
    return { data: results };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "unexpected error",
    };
  }
}
