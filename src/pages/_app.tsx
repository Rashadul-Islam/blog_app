import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Work_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const workSans = Work_Sans({
  subsets: [],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={workSans.className}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
