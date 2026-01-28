import { styled } from "@mui/material/styles";
import { AppTypography } from "../../Typography/AppTypography";

export const HeroDescription = styled(AppTypography)<{ active: boolean }>(
    ({ theme, active }) => ({
      color: "rgba(255,255,255,0.85)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
  
      maxHeight: active ? 80 : 0,
      opacity: active ? 1 : 0,
      transition: theme.transitions.create(["opacity", "max-height"], {
        duration: 300,
      }),
    })
  );
  