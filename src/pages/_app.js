import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Opera Active</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Toaster position="bottom-right" richColors />
      </ThemeProvider>
    </>
  );
}
