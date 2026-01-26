import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AuthFormWrapper from "./AuthFormWrapper";
import Divider from "@mui/material/Divider";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { AppTypography } from "../../components/ui/Typography/AppTypography";
import { AppButton } from "../../components/ui/Button/AppButton";
import { AppTextField } from "../../components/ui/TextField/AppTextField";

  function SignIn() {
    return (
      <AuthFormWrapper title="Welcome back">
        <Stack spacing={3}>
      
          <AppTypography intent="bodySecondary"> Sign in to continue to your account. </AppTypography>
          
          <Stack spacing={2}>

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

          <AppButton intent="primary"> Sign In </AppButton>       

          <Divider>
      <AppTypography intent="caption">or</AppTypography>
    </Divider>
  
          <Box sx={{ textAlign: "center" }}>
          <AppTypography intent="bodySecondary"> Don’t have an account? </AppTypography>
          
            {/* need */}
            <Link href="/signup" underline="hover">
              Create one
            </Link>
          </Box>
        </Stack>
      </AuthFormWrapper>
    );
  }
  
export default React.memo(SignIn);
