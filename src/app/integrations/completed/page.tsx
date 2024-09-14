import IntegrationCompleted from "@component/integrations/IntegrationCompleted";
import { Suspense } from "react";

function SearchBarFallback() {
  return <>placeholder</>;
}

export default async function IntegrationCompletedPage() {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <IntegrationCompleted />
    </Suspense>
  );
}
