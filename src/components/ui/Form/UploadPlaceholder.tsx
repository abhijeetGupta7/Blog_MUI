import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * UploadPlaceholder - A reusable dashed border container for file upload areas.
 * Provides consistent styling for drag-and-drop or click-to-upload interfaces.
 */
export const UploadPlaceholder = styled(AppBox)(({ theme }) => ({
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

UploadPlaceholder.displayName = "UploadPlaceholder";
