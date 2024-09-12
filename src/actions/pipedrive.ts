"use server";

import environment from "@lib/environment";
import session from "@lib/session";
import { GithubRepository } from "@model/github";
import { PipedriveContact } from "@model/pipedrive";
import { Nango } from "@nangohq/node";

export async function getPipedriveContacts(): Promise<{
  data: PipedriveContact[] | null;
  error?: string;
}> {
  const nango = new Nango({ secretKey: environment.NANGO_SECRET_KEY });

  try {
    const response = await nango.listRecords({
      providerConfigKey: "pipedrive",
      connectionId: session.user_id,
      model: "PipeDrivePerson",
    });
    console.debug(JSON.stringify(response, null, 2));
    return { data: response.records as PipedriveContact[] };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "unexpected error",
    };
  }
}
