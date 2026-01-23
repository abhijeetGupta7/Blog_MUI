import {
    Button,
    TextField,
    Stack,
    Link,
    Box,
    InputAdornment,
  } from "@mui/material";
  import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
  import AuthFormWrapper from "./AuthFormWrapper";
  import { DescriptionText, DividerText } from "../../components/ui/Typography";
  import { AuthEmailField } from "../../components/ui/TextField/Email";
  import { AuthPasswordField } from "../../components/ui/TextField/Password";

  export default function SignUp() {
    return (
        <AuthFormWrapper title="Create your account">
          <Stack spacing={3}>
            
            <DescriptionText>
              Join us and start sharing your thoughts.
            </DescriptionText>

            {/* NEED */}
            {/* Inputs */}
            <Stack spacing={2}>
              <TextField
                label="Username"
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
  
                <AuthEmailField/>
                <AuthPasswordField/>
            </Stack>
                
                {/* need */}
            {/* Primary action */}
            <Button
              variant="contained"
              size="large"
              fullWidth
            >
              Create Account
            </Button>
  
            <DividerText>or</DividerText>
  
            {/* Secondary action */}
            <Box sx={{ textAlign: "center" }}>
              <DescriptionText>
                Already have an account?
              </DescriptionText>
              {/* MUI LINK tag is normal <a> tag, so must wrap it inside react router dom */}
              <Link href="/signin" underline="hover">
                Sign in instead
              </Link>
            </Box>
          </Stack>
        </AuthFormWrapper>
    );
  }
  