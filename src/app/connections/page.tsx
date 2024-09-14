import { getConnections } from "@action/connections";
import ConnectionTable from "@component/connections/ConnectionTable";

export default async function Home() {
  const connections = await getConnections();
  console.debug(connections);
  return (
    <section className="mx-auto p-4">
      <ConnectionTable title="Connection list" connections={connections} />
    </section>
  );
}
