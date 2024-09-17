import { getConnections } from "@action/connections";
import ConnectionTable from "@component/connections/ConnectionTable";

export default async function Home() {
  const { data: connections } = await getConnections();
  return (
    <section className="mx-auto p-4">
      <ConnectionTable
        title="Connection list"
        connections={connections ?? []}
      />
    </section>
  );
}
