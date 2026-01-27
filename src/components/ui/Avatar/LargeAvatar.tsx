import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

/**
 * LargeAvatar - A reusable large avatar component.
 * Commonly used in profile pages, user cards, or comment sections.
 */
export const LargeAvatar = styled(Avatar)({
  width: 96,
  height: 96,
});

LargeAvatar.displayName = "LargeAvatar";
