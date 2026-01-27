import { Outlet } from "react-router-dom";
import AppHeader from "../../components/layout/AppHeader";
import AppFooter from "../../components/layout/AppFooter";
import { AppLayoutRoot, MainContent } from "../../components/ui/layout";

export default function AppLayout() {
  return (
    <AppLayoutRoot>
      <AppHeader />
      <MainContent component="main">
        <Outlet />
      </MainContent>
      <AppFooter />
    </AppLayoutRoot>
  );
}
