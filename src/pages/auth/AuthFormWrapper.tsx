import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { AppTypography } from "../../components/ui/Typography/AppTypography";
import React from "react";

type AuthFormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

function AuthFormWrapper({
  title,
  children,
}: AuthFormWrapperProps) {
  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <AppTypography intent="headingMedium">{title}</AppTypography>
      
      <Box sx={{ mt: 2 }}>
        {children}
      </Box>
    </Paper>
  );
}

export default React.memo(AuthFormWrapper);
