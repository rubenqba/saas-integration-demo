import { getIntegrations } from "@action/integrations";
import NangoIntegrationCard from "@component/integrations/NangoIntegrationCard";

export default async function Home() {
  const { configs } = await getIntegrations();
  return (
    <section className="mx-auto p-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Integrations</h1>
        <div className="grid grid-cols-3 justify-items-center gap-4 mt-4">
          {configs.map((i) => (
            <NangoIntegrationCard
              key={i.unique_key}
              integration={i}
              className="mt-5"
            />
          ))}
          {configs.map((i) => (
            <NangoIntegrationCard
              key={i.unique_key}
              integration={i}
              className="mt-5"
            />
          ))}
          {configs.map((i) => (
            <NangoIntegrationCard
              key={i.unique_key}
              integration={i}
              className="mt-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
