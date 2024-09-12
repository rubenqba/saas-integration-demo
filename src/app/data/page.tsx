import { getConnections } from "@action/connections";
import ResultPanel from "@component/data/ResultPanel";

export default async function DataPage() {
  const { connections } = await getConnections();

  return (
    <section className="mx-auto p-4">
      <ResultPanel title="Data samples" providers={connections} />
    </section>
  );
}
