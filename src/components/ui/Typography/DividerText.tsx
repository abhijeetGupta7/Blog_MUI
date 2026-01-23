import { Divider, Typography } from "@mui/material";

type DividerTextProps = {
  children: React.ReactNode;
};

// Any styling and theme customization can be done here and just use the same styled compoenent in this wrapper
// Later on we can add a CaptionText.tsx and make a custom typography component for Caption text, 
// then use it in a custom divider component

export function DividerText({ children }: DividerTextProps) {
  return (
    <Divider>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ px: 1 }} 
      >
        {children}
      </Typography>
    </Divider>
  );
}
