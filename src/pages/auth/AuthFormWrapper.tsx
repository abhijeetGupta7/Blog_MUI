import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ mt: 2 }}>
        {children}
      </Box>
    </Paper>
  );
}

export default React.memo(AuthFormWrapper);
