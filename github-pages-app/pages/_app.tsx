import { Raleway } from "next/font/google";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

// // This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <main className={raleway.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
