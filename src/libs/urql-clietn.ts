import { createClient, cacheExchange, fetchExchange } from "urql";

export const urqlClientConfig = {
  url: process.env.NEXT_PUBLIC_BFF_URL!,
  exchanges: [cacheExchange, fetchExchange],
};

export const urqlClient = createClient(urqlClientConfig);
