import { Integration } from "@nangohq/node";

export type NangoIntegration = Pick<Integration, "unique_key" | "provider">;
