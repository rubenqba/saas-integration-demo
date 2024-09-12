"use server";

import environment from "@lib/environment";
import session from "@lib/session";
import { GithubRepository } from "@model/github";
import { Nango } from "@nangohq/node";

export async function getGithubRepositories(): Promise<{
  data: GithubRepository[] | null;
  error?: string;
}> {
  const nango = new Nango({ secretKey: environment.NANGO_SECRET_KEY });

  try {
    const response = await nango.triggerAction(
      "github-demo",
      session.user_id,
      "list-repos"
    );
    console.debug(response);
    return { data: [] };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "unexpected error",
    };
  }
}
