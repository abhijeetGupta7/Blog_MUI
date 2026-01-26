import React from "react";
import { AppStack } from "../../components/ui/layout";
import Link from "@mui/material/Link";
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
      <AppStack gap="md">
        <AppTypography intent="bodySecondary">
          {" "}
          Sign in to continue to your account.{" "}
        </AppTypography>

        <AppStack gap="sm">
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

        <AppButton intent="primary"> Sign In </AppButton>

        <Divider>
          <AppTypography intent="caption">or</AppTypography>
        </Divider>

        <AppStack alignItems="center" gap="xs">
          <AppTypography intent="bodySecondary">
            {" "}
            Don’t have an account?{" "}
          </AppTypography>

          {/* need */}
          <Link href="/signup" underline="hover">
            Create one
          </Link>
        </AppStack>
      </AppStack>
    </AuthFormWrapper>
  );
}

export default React.memo(SignIn);
