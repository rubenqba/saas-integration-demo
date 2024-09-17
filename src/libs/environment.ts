import { z } from "zod";

const schema = z.object({
    APIDECK_APP_ID: z.string(),
    APIDECK_SECRET_KEY: z.string(),
});

export type Config = z.infer<typeof schema>;

export default schema.parse(process.env);
