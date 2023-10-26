import { AuthProvider } from "@/hooks/auth";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { urqlClient } from "@/libs/urql-clietn";
import AuthRoute from "@/components/auth/AuthsRoute";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider value={urqlClient}>
        <ChakraProvider>
          <AuthProvider>
            <AuthRoute>
              <Component {...pageProps} />
            </AuthRoute>
          </AuthProvider>
        </ChakraProvider>
      </Provider>
    </>
  );
}
