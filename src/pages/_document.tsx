import { getCssText } from "../../stitches.config";
import { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="icon" type="image/png" sizes="32x32" href="favicon/logo.png" /> */}
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta property="og:title" content="도와줘개발" />
          <meta property="og:description" content="오늘의 문제를 풀어보세요!" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
