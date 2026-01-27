import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * BlogImage - Styled image component for blog posts.
 * Provides consistent sizing, border radius, and shadow for blog images.
 */
export const BlogImage = styled(AppBox)(({ theme }) => ({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  borderRadius: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

BlogImage.displayName = "BlogImage";
