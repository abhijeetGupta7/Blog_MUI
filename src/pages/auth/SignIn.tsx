import {
    Button,
    TextField,
    Stack,
    Link,
    Typography,
    Divider,
    Box,
    InputAdornment,
  } from "@mui/material";
  import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  
  import AuthFormWrapper from "./AuthFormWrapper";
  
  export default function SignIn() {
    return (
      <AuthFormWrapper title="Welcome back">
        <Stack spacing={3}>
          <Typography variant="body2" color="text.secondary">
            Sign in to continue to your account.
          </Typography>
  
          <Stack spacing={2}>
            <TextField
              label="Email Address"
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
  
            <TextField
              label="Password"
              type="password"
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
  
          <Button variant="contained" size="large" fullWidth>
            Sign In
          </Button>
  
          <Divider>
            <Typography variant="caption" color="text.secondary">
              or
            </Typography>
          </Divider>
  
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Don’t have an account?
            </Typography>
            <Link href="/signup" underline="hover">
              Create one
            </Link>
          </Box>
        </Stack>
      </AuthFormWrapper>
    );
  }
  