"use server";

import Apideck from "@apideck/node";
import environment from "@lib/environment";
import session from "@lib/session";
import { CrmContact } from "@model/crm";

export async function getPipedriveContacts(service: string): Promise<{
  data: CrmContact[] | null;
  error?: string;
}> {
  const apideck = new Apideck({
    apiKey: environment.APIDECK_SECRET_KEY,
    appId: environment.APIDECK_APP_ID,
    consumerId: session.user_id,
  });

  const { status_code, status, data } = await apideck.crm.contactsAll({
    serviceId: service,
    consumerId: session.user_id,
  });

  if (status_code !== 200) {
    console.error("Failed to fetch contacts", data);
    return { error: status, data: null };
  }

  console.debug("Contacts", data);

  return { data: data ?? [] };
}
