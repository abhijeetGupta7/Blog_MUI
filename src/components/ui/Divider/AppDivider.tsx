import Divider, { type DividerProps } from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

export type AppDividerProps = DividerProps;

export const AppDivider = styled(Divider)<DividerProps>({});

AppDivider.displayName = "AppDivider";
