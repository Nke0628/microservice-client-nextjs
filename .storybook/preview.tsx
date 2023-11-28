import type { Preview } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "urql";
import React from "react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { graphql } from "msw";
import { createClient, cacheExchange, fetchExchange } from "urql";

export const mswUrqlClientConfig = {
  url: "http://localhost:6006/graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Accept: "*/*",
    },
  },
};

export const mswUrqlClient = createClient(mswUrqlClientConfig);

initialize();

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
    (Story) => {
      return (
        <Provider value={mswUrqlClient}>
          <ChakraProvider>
            <Story />
          </ChakraProvider>
        </Provider>
      );
    },
  ],
  loaders: [mswLoader],
};

export default preview;
