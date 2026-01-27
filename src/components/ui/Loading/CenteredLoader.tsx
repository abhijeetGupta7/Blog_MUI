import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * CenteredLoader - Centered loading container.
 * Provides consistent centering and minimum height for loading states.
 */
export const CenteredLoader = styled(AppBox)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
});

CenteredLoader.displayName = "CenteredLoader";
