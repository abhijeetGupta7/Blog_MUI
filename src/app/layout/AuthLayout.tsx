import { Box, Container, Grid, Typography } from "@mui/material";
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
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Welcome to MyBlog
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Share your thoughts with the world.
            </Typography>
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
