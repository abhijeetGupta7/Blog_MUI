import React from "react";
import { AppStack } from "../../components/ui/layout";
import AuthFormWrapper from "./AuthFormWrapper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { AppTypography } from "../../components/ui/Typography/AppTypography";
import { AppButton } from "../../components/ui/Button/AppButton";
import { AppTextField } from "../../components/ui/TextField/AppTextField";
import { AppDivider } from "../../components/ui/Divider/AppDivider";
import { AppLink } from "../../components/ui/Link/AppLink";

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

        <AppDivider>
          <AppTypography intent="caption">or</AppTypography>
        </AppDivider>

        <AppStack alignItems="center" gap="xs">
          <AppTypography intent="bodySecondary">
            {" "}
            Don’t have an account?{" "}
          </AppTypography>

          <AppLink to="/signup">Create one</AppLink>
        </AppStack>
      </AppStack>
    </AuthFormWrapper>
  );
}

export default React.memo(SignIn);
