import Chip, { type ChipProps } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export type AppChipProps = ChipProps;

export const AppChip = styled(Chip)<ChipProps>({});

AppChip.displayName = "AppChip";
