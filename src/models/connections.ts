
export type NangoConnection = {
    id: number;
    connection_id: string;
    provider: string;
    provider_config_key: string;
    created: string; // ISO date
    metadata?: Record<string, unknown> | null
}