import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { urqlClient } from "@/libs/urql-clietn";
import AuthRoute from "@/components/auth/AuthsRoute";
import { NextPage } from "next";
import { ReactElement, ReactNode, Suspense } from "react";
import NextAdapterPages from "next-query-params/pages";
import { QueryParamProvider } from "use-query-params";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/error/ErrorFallback";
import { LoginUserProvider } from "@/store/LoginUserProvider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>...loading</p>}>
          <Provider value={urqlClient}>
            <LoginUserProvider>
              <ChakraProvider>
                <QueryParamProvider adapter={NextAdapterPages}>
                  {getLayout(<Component {...pageProps} />)}
                </QueryParamProvider>
              </ChakraProvider>
            </LoginUserProvider>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
