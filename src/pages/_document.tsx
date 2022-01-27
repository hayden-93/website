import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen max-w-screen-xl mx-auto bg-blue1">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
