import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { RecentlySearchedProvider } from "@/contexts/RecentlySearchedContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RecentlySearchedProvider>
        <Component {...pageProps} />
      </RecentlySearchedProvider>
    </ThemeProvider>
  );
}
