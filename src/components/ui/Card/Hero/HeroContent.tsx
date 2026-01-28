import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";

export const HeroContent = styled(CardContent)<{ active: boolean }>(
    ({ theme, active }) => ({
      position: "absolute",
      bottom: 0,
      width: "100%",
      padding: theme.spacing(4),
      color: "white",
      zIndex: 1,
  
      transform: active ? "translateY(0)" : "translateY(20px)",
      transition: theme.transitions.create("transform", {
        duration: 500,
        easing: "cubic-bezier(0.2,0,0,1)",
      }),
    })
  );
  