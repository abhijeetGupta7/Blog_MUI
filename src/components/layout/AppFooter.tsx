import React from "react";
import { AppTypography } from "../ui/Typography/AppTypography";
import { FooterContainer, FooterLink, FooterRoot, LinkGroup } from "../ui/layout";

function AppFooter() {
  return (
    <FooterRoot component="footer">
      <FooterContainer maxWidth="lg">
        {/* Left side */}
        <AppTypography intent="bodySecondary">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </AppTypography>

        {/* Right side */}
        <LinkGroup>
          <FooterLink href="#" underline="hover" color="text.secondary">
            Privacy
          </FooterLink>
          <FooterLink href="#" underline="hover" color="text.secondary">
            Terms
          </FooterLink>
          <FooterLink href="#" underline="hover" color="text.secondary">
            Contact
          </FooterLink>
        </LinkGroup>
      </FooterContainer>
    </FooterRoot>
  );
}

export default React.memo(AppFooter);
