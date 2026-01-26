import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AuthFormWrapper from "./AuthFormWrapper";
import Divider from "@mui/material/Divider";
import { AppTypography } from "../../components/ui/Typography/AppTypography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { AppButton } from "../../components/ui/Button/AppButton";
import { AppTextField } from "../../components/ui/TextField/AppTextField";

  function SignUp() {
    return (
        <AuthFormWrapper title="Create your account">
          <Stack spacing={3}>
            
          <AppTypography intent="bodySecondary">Join us and start sharing your thoughts.</AppTypography>

              {/* NEED */}
            {/* Inputs */}
            <Stack spacing={2}>
            <AppTextField
  label="Username"
  startIcon={<PersonOutlineIcon />}
/>
  
  
          <AppTextField
  label="Email address"
  type="email"
  startIcon={<EmailOutlinedIcon />}
/>

<AppTextField
  label="Password"
  type="password"
  startIcon={<LockOutlinedIcon />}
/>
            </Stack>
                
            <AppButton intent="primary">Create Account</AppButton>
            
            <Divider>
      <AppTypography intent="caption" sx={{px:1}}>or</AppTypography>
    </Divider>
  
            {/* Secondary action */}
            <Box sx={{ textAlign: "center" }}>
            <AppTypography intent="bodySecondary">Already have an account?</AppTypography>
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
  