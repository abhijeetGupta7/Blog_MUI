import { AppNavLinkButton } from "../Link/AppNavLinkButton";
import { AppTypography } from "../Typography/AppTypography";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <AppNavLinkButton to={to} intent="ghost">
      <AppTypography intent="headingSmall">
        {children}
      </AppTypography>
    </AppNavLinkButton>
  );
}
