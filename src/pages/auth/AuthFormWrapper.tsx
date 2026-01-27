import { AppTypography } from "../../components/ui/Typography/AppTypography";
import React from "react";
import { AuthFormCard, AuthFormContent } from "../../components/ui/Form";

type AuthFormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

function AuthFormWrapper({ title, children }: AuthFormWrapperProps) {
  return (
    <AuthFormCard intent="base" elevation={2}>
      <AppTypography intent="headingMedium">{title}</AppTypography>

      <AuthFormContent>{children}</AuthFormContent>
    </AuthFormCard>
  );
}

export default React.memo(AuthFormWrapper);
