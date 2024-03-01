import type { Preview } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "urql";
import React, { ReactElement } from "react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { graphql } from "msw";
import { createClient, cacheExchange, fetchExchange } from "urql";
import NextAdapterPages from "next-query-params/pages";
import { QueryParamProvider } from "use-query-params";
import { NextPage } from "next";

export const mswUrqlClientConfig = {
  url: "http://localhost:6006/graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Accept: "*/*",
    },
  },
};

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

export const mswUrqlClient = createClient(mswUrqlClientConfig);

const options =
  location.hostname !== "nke0628.github.io"
    ? {}
    : {
        serviceWorker: {
          url: "/microservice-client-nextjs/mockServiceWorker.js",
        },
      };

initialize(options);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [
        graphql.query("login", (req, res, ctx) => {
          return res(
            ctx.data({
              jwt: "hoge",
            })
          );
        }),
      ],
    },
  },
  decorators: [
    (Story, { component }) => {
      const getLayout =
        (component as NextPageWithLayout)?.getLayout || ((page) => page);
      console.log(getLayout);
      return (
        <Provider value={mswUrqlClient}>
          <ChakraProvider>
            <QueryParamProvider adapter={NextAdapterPages}>
              {getLayout(<Story />)}
            </QueryParamProvider>
          </ChakraProvider>
        </Provider>
      );
    },
  ],
  loaders: [mswLoader],
};

export default preview;
