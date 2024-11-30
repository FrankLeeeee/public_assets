import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      {/* head */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="title" content="Shenggui Li's Public Assets" />
        <meta
          name="description"
          content="A collection of public assets for Shenggui Li"
        />
        <meta
          name="keywords"
          content="Shenggui Li, Li Shenggui, Shenggui, Frank Lee, FrankLeeeeee, NTU"
        ></meta>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
