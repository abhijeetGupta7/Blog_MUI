import { styled } from "@mui/material/styles";
import { AppContainer } from "../layout";

/**
 * BlogDetailContainer
 * Layout wrapper for the Blog Detail page.
 * Provides consistent vertical spacing for blog content
 */
export const BlogDetailContainer = styled(AppContainer)(
  ({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  })
);

BlogDetailContainer.displayName = "BlogDetailContainer";
