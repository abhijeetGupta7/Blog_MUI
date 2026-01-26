import { type Theme } from "@mui/material/styles";
import { type CSSObject } from "@mui/system";
import { type Breakpoint } from "@mui/material";

/* -------------------------------------------------------------------------- */
/* 1. CONFIGURATION (Design Tokens)                                           */
/* -------------------------------------------------------------------------- */

export type SpacingToken = "xs" | "sm" | "md" | "lg" | "xl" | "section";

export const spacingMap: Record<SpacingToken, number> = {
  xs: 1,      // 8px
  sm: 2,      // 16px
  md: 3,      // 24px
  lg: 4,      // 32px
  xl: 6,      // 48px
  section: 8, // 64px
};

/* -------------------------------------------------------------------------- */
/* 2. TYPES                                                                   */
/* -------------------------------------------------------------------------- */

// Allows: "md" | 2 | { xs: "sm", md: "lg" }
export type AppGapProp = 
  | SpacingToken 
  | number 
  | Partial<Record<Breakpoint, SpacingToken | number>>;

/* -------------------------------------------------------------------------- */
/* 3. LOGIC (The Clean Resolver)                                              */
/* -------------------------------------------------------------------------- */

export const resolveGap = (theme: Theme, gap: AppGapProp): CSSObject => {
  // Helper: Converts Token ("md") OR Number (2) -> CSS Value ("24px")
  const getVal = (val: SpacingToken | number) => {
    const multiplier = typeof val === "string" ? spacingMap[val] : val;
    return theme.spacing(multiplier);
  };

  // Case A: Simple Value (String or Number)
  // Returns: { gap: "24px" }
  if (typeof gap === "string" || typeof gap === "number") {
    return { gap: getVal(gap) };
  }

  // Case B: Responsive Object
  // Returns: { "@media (min-width:0px)": { gap: "16px" }, ... }
  const styles: CSSObject = {};

  for (const [breakpoint, value] of Object.entries(gap)) {
    if (value !== undefined) {
      // theme.breakpoints.up() returns the media query string
      const mediaQuery = theme.breakpoints.up(breakpoint as Breakpoint);
      styles[mediaQuery] = { gap: getVal(value) };
    }
  }

  return styles;
};