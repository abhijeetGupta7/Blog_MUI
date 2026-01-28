import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * SectionTitle - Container for section title content.
 * Provides flex column layout for title and subtitle.
 */
export const SectionTitle = styled(AppBox)({
  display: "flex",
  flexDirection: "column",
});

SectionTitle.displayName = "SectionTitle";
