import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
     <Head>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, Next.js, and Tailwind CSS."
        />
     </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
