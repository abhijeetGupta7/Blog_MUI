// AppLink but based on React Router Dom not native link of MUI
import { styled } from "@mui/material/styles";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

export const AppLink = styled(RouterLink)<LinkProps>(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
}));
