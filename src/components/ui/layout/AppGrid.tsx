import Grid, { type GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export type AppGridProps = GridProps;

export const AppGrid = styled(Grid)<GridProps>({});

AppGrid.displayName = "AppGrid";
