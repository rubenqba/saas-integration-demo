import Apideck from "@apideck/node";
import environment from "@lib/environment";
import session from "@lib/session";

export async function getApideckSession() {
  const apideck = new Apideck({
    apiKey: environment.APIDECK_SECRET_KEY,
    appId: environment.APIDECK_APP_ID,
    consumerId: session.user_id,
  });
  const settings = {};
  const { data } = await apideck.vault.sessionsCreate(settings);
  return data;
}
