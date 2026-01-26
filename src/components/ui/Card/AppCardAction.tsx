import CardActionArea, { type CardActionAreaProps } from "@mui/material/CardActionArea";
import { styled } from "@mui/material/styles";

/**
 * AppCardAction
 * - Removes the focus highlight
 * - Provides hover selector to scale child media (.MuiCardMedia-img)
 */
export const AppCardAction = styled(CardActionArea)<CardActionAreaProps>(({ theme }) => ({
  height: "100%", // Ensure it fills the card
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",

  // remove the default focus highlight element
  '& .MuiCardActionArea-focusHighlight': {
    display: 'none',
  },

  // Make child img scale on hover of the action area
  // We target both root (for simple img) and the wrapper class
  '&:hover .MuiCardMedia-root, &:hover .MuiCardMedia-img': {
    transform: 'scale(1.05)',
  },
})) as typeof CardActionArea; // Restores polymorphism (allows 'to' prop)

export default AppCardAction;