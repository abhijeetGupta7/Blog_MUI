import { AppContainer } from "../../components/ui/layout";
import { AppTypography } from "../../components/ui/Typography/AppTypography";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  AuthLayoutRoot,
  AuthSidePanel,
  AuthSideContent,
  AuthFormPanel,
} from "../../components/ui/Auth";

export default function AuthLayout() {
  return (
    <AuthLayoutRoot>
      <Grid container minHeight="100vh">
        {/* LEFT SIDE – IMAGE */}
        <AuthSidePanel size={{ xs: 0, md: 6 }}>
          <AuthSideContent>
            <AppTypography intent="headingMedium" gutterBottom>
              Welcome to MyBlog
            </AppTypography>
            <AppTypography intent="bodyPrimary">
              Share your thoughts with the world.
            </AppTypography>
          </AuthSideContent>
        </AuthSidePanel>

        {/* RIGHT SIDE – FORM */}
        <AuthFormPanel size={{ xs: 12, md: 6 }}>
          <AppContainer maxWidth="sm">
            <Outlet />
          </AppContainer>
        </AuthFormPanel>
      </Grid>
    </AuthLayoutRoot>
  );
}
