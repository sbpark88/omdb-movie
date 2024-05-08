/**
 * Convert object to url query string
 *
 * @param {Record<string, string>} queries
 * @return {string | undefined}
 */
const createQueries = (queries: Record<string, string>): string | undefined => {
  const queryString = new URLSearchParams(queries).toString();
  return queryString ? `?${queryString}` : undefined;
};

interface HttpOptions {
  method: string;
  body?: Record<string, unknown>;
}

/**
 * Create options for fetch
 */
const createOptions = ({ method, body }: HttpOptions) => {
  const options = {
    method: method,
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
    referrerPolicy: "no-referrer",
  };
  if (body) {
    Object.assign(options, { body: JSON.stringify(body) });
  }
  return options;
};

interface FetchParams {
  url: string;
  queryString?: string;
  options?: object;
}

/**
 * Call fetch and return resolved data or throw exception
 */
const _fetch = async ({
  url,
  queryString,
  options,
}: FetchParams): Promise<any> => {
  if (!url) return null;
  try {
    const response = await fetch(url + (queryString ?? ""), options);
    if (!response.ok) throw new HTTPError(response.status, response.statusText);

    return response.json();
  } catch (error) {
    if (error instanceof HTTPError) {
      throw error;
    } else {
      console.error("Non-HTTP Error occurred: ", error);
      throw error;
    }
  }
};

/**
 * Custom fetch
 */
export const $fetch = {
  GET: async (url: string, queries?: Record<string, unknown>) =>
    await _fetch({
      url,
      queryString: createQueries(queries as Record<string, string>),
      options: createOptions({ method: "GET" }),
    }),
  POST: async (url: string, body?: Record<string, unknown>) =>
    await _fetch({ url, options: createOptions({ method: "POST", body }) }),
  PUT: async (url: string, body?: Record<string, unknown>) =>
    await _fetch({ url, options: createOptions({ method: "PUT", body }) }),
  PATCH: async (url: string, body?: Record<string, unknown>) =>
    await _fetch({ url, options: createOptions({ method: "PATCH", body }) }),
  DELETE: async (
    url: string,
    body: Record<string, unknown>,
  ): Promise<unknown> =>
    await _fetch({ url, options: createOptions({ method: "DELETE", body }) }),
};

class HTTPError extends Error {
  constructor(
    public status: number,
    public statusText: string,
  ) {
    super(`HTTP Error ${status}: ${statusText}`);
  }
}
