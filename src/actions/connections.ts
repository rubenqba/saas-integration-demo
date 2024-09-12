import environment from "@lib/environment";
import session from "@lib/session";
import { Nango } from "@nangohq/node";

export async function getConnections() {
  const nango = new Nango({ secretKey: environment.NANGO_SECRET_KEY });

  return await nango.listConnections(session.user_id);
}
