import { Box, Paper, Typography } from "@mui/material";

type AuthFormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function AuthFormWrapper({
  title,
  children,
}: AuthFormWrapperProps) {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ mt: 2 }}>
        {children}
      </Box>
    </Paper>
  );
}
