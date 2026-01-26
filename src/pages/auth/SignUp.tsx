import React from "react";
import { AppStack } from "../../components/ui/layout";
import Link from "@mui/material/Link";
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
      <AppStack gap="md">
        <AppTypography intent="bodySecondary">
          Join us and start sharing your thoughts.
        </AppTypography>
        
        {/* Inputs */}
        <AppStack gap="sm">
          <AppTextField label="Username" startIcon={<PersonOutlineIcon />} />

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
        </AppStack>

        <AppButton intent="primary">Create Account</AppButton>

        <Divider>
          <AppTypography intent="caption">or</AppTypography>
        </Divider>

        {/* Secondary action */}
        <AppStack alignItems="center" gap="xs">
          <AppTypography intent="bodySecondary">
            Already have an account?
          </AppTypography>
          {/* MUI LINK tag is normal <a> tag, so must wrap it inside react router dom */}
          <Link href="/signin" underline="hover">
            Sign in instead
          </Link>
        </AppStack>
      </AppStack>
    </AuthFormWrapper>
  );
}
export default React.memo(SignUp);
