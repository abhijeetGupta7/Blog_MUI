import { styled, Typography } from "@mui/material";

export const DescriptionText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));
