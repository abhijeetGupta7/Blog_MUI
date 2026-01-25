import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";

function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: 3,
        mt: "auto",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* Left side */}
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </Typography>

        {/* Right side */}
        <Box>
          <Link
            href="#"
            underline="hover"
            color="text.secondary"
            sx={{ mx: 1 }}
          >
            Privacy
          </Link>
          <Link
            href="#"
            underline="hover"
            color="text.secondary"
            sx={{ mx: 1 }}
          >
            Terms
          </Link>
          <Link
            href="#"
            underline="hover"
            color="text.secondary"
            sx={{ mx: 1 }}
          >
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default React.memo(AppFooter);
