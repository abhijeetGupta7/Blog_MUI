import React from "react";
import { styled } from "@mui/material/styles";
import Avatar, {type AvatarProps } from "@mui/material/Avatar";

/**
 * LargeAvatar - A reusable large avatar component.
 * Accepts all `Avatar` props and ensures an accessible `alt` is provided.
 */
const Styled = styled(Avatar)({
  width: 96,
  height: 96,
});

export type LargeAvatarProps = AvatarProps & { alt?: string };

export const LargeAvatar: React.FC<LargeAvatarProps> = ({ alt, ...props }) => {
  // If no alt provided, default to a sensible label for screen readers.
  const altText = alt ?? "User avatar";
  return <Styled alt={altText} {...props} />;
};

LargeAvatar.displayName = "LargeAvatar";
