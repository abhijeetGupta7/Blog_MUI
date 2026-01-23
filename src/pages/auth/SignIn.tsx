import {
    Button,
    Stack,
    Link,
    Box, 
  } from "@mui/material";
  import AuthFormWrapper from "./AuthFormWrapper";
  import { DescriptionText, DividerText } from "../../components/ui/Typography";
import { AuthEmailField } from "../../components/ui/TextField/Email";
import { AuthPasswordField } from "../../components/ui/TextField/Password";

  export default function SignIn() {
    return (
      <AuthFormWrapper title="Welcome back">
        <Stack spacing={3}>
          <DescriptionText> Sign in to continue to your account. </DescriptionText>
  
          <Stack spacing={2}>
            <AuthEmailField/>
            <AuthPasswordField/>
          </Stack>

        {/* NEED */}
          <Button variant="contained" size="large" fullWidth>
            Sign In
          </Button>         
  
          <DividerText>or</DividerText>
  
          <Box sx={{ textAlign: "center" }}>
            <DescriptionText> Don’t have an account? </DescriptionText>
            {/* need */}
            <Link href="/signup" underline="hover">
              Create one
            </Link>
          </Box>
        </Stack>
      </AuthFormWrapper>
    );
  }
  