import { styled } from "@mui/material/styles";

export const BlogImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: 400,
  objectFit: "cover",
  borderRadius: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

BlogImage.displayName = "BlogImage";
