import CardMedia, { type CardMediaProps } from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

// 1. Container - extends AppBox for flexibility
export const AppCardMediaContainer = styled(AppBox)({
  overflow: "hidden",
  width: "100%",
  flexShrink: 0,
  position: "relative",
});

// 2. The Media Component
export const AppCardMedia = styled(CardMedia)<CardMediaProps>(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  display: "block",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.standard,
  }),

  "&.MuiCardMedia-root, & .MuiCardMedia-img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
})) as typeof CardMedia;

export default AppCardMedia;
