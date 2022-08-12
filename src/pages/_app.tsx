import type { AppProps } from "next/app";
import Head from "next/head";
import { styled } from "../../stitches.config";
import Nav from "../components/Common/Nav";
import { globalStyles } from "../styles/global.style";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <title>도와줘개발</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledSize>
        <StyledBigBoxSize>
          <Nav />
          <StyledMainWrapper>
            <Component {...pageProps} />
          </StyledMainWrapper>
        </StyledBigBoxSize>
      </StyledSize>
    </>
  );
}

export default MyApp;

const StyledSize = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  minHeight: "749px",
  height: "100vh",
});

const StyledBigBoxSize = styled("section", {
  position: "relative",
  width: "70%",
});

const StyledMainWrapper = styled("div", {
  width: "100%",
  height: "100%",
  backgroundColor: "$yellow100",
});
