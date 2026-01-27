import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";

/**
 * SelectWrapper - Styled select component with consistent min-width.
 * Provides consistent sizing for select dropdowns.
 */
export const SelectWrapper = styled(Select)({
  minWidth: 160,
});

SelectWrapper.displayName = "SelectWrapper";
