import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;600;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="max-w-screen-xl mx-auto bg-indigo1">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
