import { styled } from "@mui/material/styles";
import Container, { type ContainerProps } from "@mui/material/Container";

// ----------------------------------------------------------------------
// 1. TYPES
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
// 2. THE COMPONENT
// ----------------------------------------------------------------------

export const AppContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  // 1. Consistent Responsive Gutters
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },

  // 2. Layout Safety
  display: "block",
  width: "100%",
}));

AppContainer.displayName = "AppContainer";