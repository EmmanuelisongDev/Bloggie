import createClient from "@sanity/client";

const client = createClient({
  projectId: "1gamvwh7",
  dataset: "production",
  token: import.meta.env.VITE_SANITY_TOKEN,
  apiVersion: "v2022-03-07",
  useCdn: true,
});

export default client;
