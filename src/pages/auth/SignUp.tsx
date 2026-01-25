import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
  import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
  import AuthFormWrapper from "./AuthFormWrapper";
import { Typography, Divider } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";


  function SignUp() {
    return (
        <AuthFormWrapper title="Create your account">
          <Stack spacing={3}>
            
          <Typography color="text.secondary" variant="body2"> Join us and start sharing your thoughts. </Typography>

              {/* NEED */}
            {/* Inputs */}
            <Stack spacing={2}>
              <TextField
                label="Username"
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
      label="Email address"
      type="email"
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
                
                {/* need */}
            {/* Primary action */}
            <Button
              variant="contained"
              size="large"
              fullWidth
            >
              Create Account
            </Button>
  
            <Divider>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ px: 1 }} 
      >
        or
      </Typography>
    </Divider>
  
            {/* Secondary action */}
            <Box sx={{ textAlign: "center" }}>
            <Typography color="text.secondary" variant="body2"> Already have an account? </Typography>
               {/* MUI LINK tag is normal <a> tag, so must wrap it inside react router dom */}
              <Link href="/signin" underline="hover">
                Sign in instead
              </Link>
            </Box>
          </Stack>
        </AuthFormWrapper>
    );
  }
    export default React.memo(SignUp);
  