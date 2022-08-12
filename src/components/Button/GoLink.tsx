import Link from "next/link";
import { styled } from "../../../stitches.config";

interface Props {
  firstUrl: string;
  twoUrl: string;
  firstSummary: string;
  twoSummary: string;
}

function GoLink({ firstUrl, twoUrl, firstSummary, twoSummary }: Props) {
  return (
    <StyledSize>
      <StyledItemWrapper>
        <Link href={firstUrl}>
          <StyledAnchor>
            <button>{firstSummary}</button>
          </StyledAnchor>
        </Link>
        <Link href={twoUrl}>
          <StyledAnchor>
            <button>{twoSummary}</button>
          </StyledAnchor>
        </Link>
      </StyledItemWrapper>
    </StyledSize>
  );
}
export default GoLink;

const StyledSize = styled("div", {
  position: "relative",
  marginTop: "9%",
  width: "100%",
});

const StyledItemWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
});

const StyledAnchor = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  width: "40%",
  height: "4rem",
  fontWeight: "$lg",
  backgroundColor: "$yellow",
  opacity: 0.8,
  marginBottom: "0.85rem",
});
