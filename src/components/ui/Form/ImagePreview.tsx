import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * ImagePreview - A reusable component for displaying image previews.
 * Commonly used in upload forms, galleries, or image selection interfaces.
 * 
 * Usage: <ImagePreview component="img" src="..." alt="..." />
 */
export const ImagePreview = styled(AppBox)(({ theme }) => ({
  width: 140,
  height: 90,
  objectFit: "cover",
  borderRadius: theme.spacing(1),
})) as typeof AppBox;

ImagePreview.displayName = "ImagePreview";
