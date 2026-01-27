import Paper, { type PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export type AppPaperIntent = "base" | "subtle" | "highlight";

export interface AppPaperProps extends Omit<PaperProps, "sx"> {
  intent?: AppPaperIntent;
}

export const AppPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "intent",
})<AppPaperProps>(({ theme, intent = "base" }) => {
  const styles: Record<AppPaperIntent, Record<string, unknown>> = {
    base: {
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: theme.shadows[1],
    },
    subtle: {
      backgroundColor: theme.palette.mode === "dark" 
        ? theme.palette.grey[900] 
        : theme.palette.grey[50],
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: "none",
    },
    highlight: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      border: "none",
      boxShadow: theme.shadows[4],
    },
  };

  return {
    borderRadius: (Number(theme.shape?.borderRadius) || 4) * 2,
    ...styles[intent],
  };
});

AppPaper.displayName = "AppPaper";
