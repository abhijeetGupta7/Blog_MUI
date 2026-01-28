import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * SectionHeader - Header container for page sections.
 * Provides flex layout for section titles and actions.
 */
export const SectionHeader = styled(AppBox)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

SectionHeader.displayName = "SectionHeader";
