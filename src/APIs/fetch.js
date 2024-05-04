/**
 * Create query string for fetch
 *
 * @param {object} queries
 * @return {string | null}
 */
const createQueries = (queries) => {
  const queryString = new URLSearchParams(queries).toString();
  return queryString ? `?${queryString}` : null;
};

/**
 * Create options for fetch
 *
 * @param {string} method
 * @param {object} [body]
 * @return {object} fetch options
 */
const createOptions = ({ method, body }) => {
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

/**
 * Call fetch and return resolved data or throw exception
 *
 * @param {string} url
 * @param {string} [queryString]
 * @param {object} options
 * @return {Promise}
 * @private
 */
const _fetch = async ({ url, queryString, options }) => {
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
 *
 * @param {string} url
 * @param {object} [queries]
 * @param {object} options
 * @return {Promise} - return promise resolved data
 * @throws {HTTPError | Error}
 */
export const $fetch = {
  GET: async (url, queries) =>
    await _fetch({
      url,
      queryString: createQueries(queries),
      options: createOptions({ method: "GET" }),
    }),
  POST: async (url, body) =>
    await _fetch({ url, options: createOptions({ method: "POST", body }) }),
  PUT: async (url, body) =>
    await _fetch({ url, options: createOptions({ method: "PUT", body }) }),
  PATCH: async (url, body) =>
    await _fetch({ url, options: createOptions({ method: "PATCH", body }) }),
  DELETE: async (url, body) =>
    await _fetch({ url, options: createOptions({ method: "DELETE", body }) }),
};

/**
 *
 * @param {object} params
 * @return {URLSearchParams}
 */
export const createQuery = (params) => new URLSearchParams(params);

class HTTPError extends Error {
  constructor(status, statusText) {
    super(`HTTP Error ${status}: ${statusText}`);
    this.status = status;
    this.statusText = statusText;
  }
}
