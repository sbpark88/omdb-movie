import { $fetch } from "@utils/fetch";
import $K from "src/constants";

export default async function handler(request: any, response: any) {
  const { title, page } = request.query;
  const queries = {
    apiKey: process.env.OMDB_API_KEY,
    s: title,
    page,
  };

  const res = await $fetch.GET($K.OMDB_API_URL, queries);
  response.status(200).json(res);
}
