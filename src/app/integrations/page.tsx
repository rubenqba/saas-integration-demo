import UnifiedDirectory from "@component/integrations/UnifiedDirectory";
import environment from "@lib/environment";
import session from "@lib/session";

export default async function Home() {
  return (
    <UnifiedDirectory
      workspace_id={environment.UNIFIED_WORKSPACE}
      // categories={["crm"]}
      external_xref={session.user_id}
      success_redirect={"http://localhost:3000/integrations/completed"}
      failure_redirect={"http://localhost:3000/integrations/failure"}
      environment={"Production"}
    />
  );
}
