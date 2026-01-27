import { styled } from "@mui/material/styles";
import { AppPaper, type AppPaperProps } from "../layout/AppPaper";

export interface PageCardProps extends AppPaperProps {
  maxWidth?: number | string;
}

/**
 * PageCard - A reusable card component for page content.
 * Provides consistent styling and responsive padding for form cards, content cards, etc.
 */
export const PageCard = styled(AppPaper, {
  shouldForwardProp: (prop) => prop !== "maxWidth",
})<PageCardProps>(({ theme, maxWidth = 720 }) => ({
  width: "100%",
  maxWidth: typeof maxWidth === "number" ? theme.spacing(maxWidth) : maxWidth,
  padding: theme.spacing(4),
}));

PageCard.displayName = "PageCard";

export const CreatePostCard = styled(PageCard)(({ theme }) => ({
  padding: theme.spacing(2.5),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

CreatePostCard.displayName = "CreatePostCard";
