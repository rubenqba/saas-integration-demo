import { z } from "zod";

const schema = z.object({
    UNIFIED_WORKSPACE: z.string(),
    UNIFIED_SECRET_KEY: z.string(),
});

export type Config = z.infer<typeof schema>;

export default schema.parse(process.env);
