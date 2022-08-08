import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Noto Sans KR, sans-serif",
    wordBreak: "keep-all",
  },
  "html, body": {
    width: "100vw",
    height: "100vh",
    scrollBehavior: "smooth",
    overflow: "hidden",
    backgroundColor: "$white",
  },
  "img, button, a": {
    all: "unset",
    cursor: "pointer",
  },
});
