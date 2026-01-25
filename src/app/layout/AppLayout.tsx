import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import AppHeader from "../../components/layout/AppHeader";
import AppFooter from "../../components/layout/AppFooter";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
        <AppHeader />
      
            <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
                <Outlet />
            </Container>
            
        <AppFooter />
    </Box>
  );
}