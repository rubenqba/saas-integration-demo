import environment from "@lib/environment";
import { Nango } from "@nangohq/node";

export async function getIntegrations() {
    
    const nango = new Nango({ secretKey: environment.NANGO_SECRET_KEY});

    return await nango.listIntegrations()
}