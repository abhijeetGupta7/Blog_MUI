import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * LinkGroup - Container for grouping links horizontally.
 * Commonly used in footers, headers, or navigation areas.
 */
export const LinkGroup = styled(AppBox)({
  display: "flex",
});

LinkGroup.displayName = "LinkGroup";
