import { getIntegrations } from "@action/integrations";
import NangoIntegrationCard from "@component/integrations/NangoIntegrationCard";

export default async function Home() {
  const { configs } = await getIntegrations();
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <li className="col-span-1 divide-y divide-gray-200 rounded-xl bg-white shadow">
        {configs.map((i) => (
          <NangoIntegrationCard key={i.unique_key} integration={i} className="mt-5"/>
        ))}
      </li>
    </div>
  );
}
