import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AppTypography } from "../../components/ui/Typography/AppTypography";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container minHeight="100vh">
        
        {/* LEFT SIDE – IMAGE */}
        <Grid
          size={{ xs: 0, md: 6 }}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <Box sx={{ textAlign: "center", px: 4 }}>
            <AppTypography intent="headingMedium" gutterBottom>Welcome to MyBlog</AppTypography>
            <AppTypography intent="bodyPrimary">Share your thoughts with the world.</AppTypography>
          </Box>
        </Grid>

        {/* RIGHT SIDE – FORM */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm">
            <Outlet />
          </Container>
        </Grid>

      </Grid>
    </Box>
  );
}
