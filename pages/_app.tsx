import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.scss";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { Notifications } from "@mantine/notifications";
import { AuthContextProvider } from "@/state/auth";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const wrappedComponent = () => {
    return ["/login"].includes(router.pathname) ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: "light",
              fontSizes: {
                xs: "0.6rem",
                sm: "0.75rem",
                md: "1rem",
                lg: "1rem",
                xl: "1.2rem",
              },
              components: {
                Button: {},
                ActionIcon: {
                  // sizes: {},
                },
              },
            }}
          >
            <Notifications />
            <AuthContextProvider>{wrappedComponent()}</AuthContextProvider>
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
