import { styled } from "@mui/material/styles";

export const ImagePreview = styled("img")(({ theme }) => ({
  width: 140,
  height: 90,
  objectFit: "cover",
  borderRadius: theme.spacing(1),
}));
