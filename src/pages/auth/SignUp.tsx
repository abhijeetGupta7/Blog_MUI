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
  import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
  import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import AuthFormWrapper from "./AuthFormWrapper";
  
  export default function SignUp() {
    return (
        <AuthFormWrapper title="Create your account">
          <Stack spacing={3}>
            {/* Subtitle */}
            <Typography variant="body2" color="text.secondary">
              Join us and start sharing your thoughts.
            </Typography>
  
            {/* Inputs */}
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
  
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
  
            {/* Primary action */}
            <Button
              variant="contained"
              size="large"
              fullWidth
            >
              Create Account
            </Button>
  
            {/* Divider */}
            <Divider>
              <Typography variant="caption" color="text.secondary">
                or
              </Typography>
            </Divider>
  
            {/* Secondary action */}
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?
              </Typography>
              <Link href="/signin" underline="hover">
                Sign in instead
              </Link>
            </Box>
          </Stack>
        </AuthFormWrapper>
    );
  }
  