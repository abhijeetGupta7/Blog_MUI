import CardContent, { type CardContentProps } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

export const AppCardContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  // Ensure last-child padding is consistent
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export default AppCardContent;

