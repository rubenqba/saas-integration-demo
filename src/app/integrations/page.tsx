import { getApideckSession } from "@action/apideck";
import { getIntegrations } from "@action/integrations";
import IntegrationVault from "@component/apideck/IntegrationVault";

export default async function Home() {
  const { session_token } = await getApideckSession();
  const { data } = await getIntegrations();

  return (
    <IntegrationVault className="flex flex-row gap-5" token={session_token} integrations={data ?? []}/>
  );
}
