import { useState } from "react";
import { AppBox, AppStack } from "../components/ui/layout";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { MOCK_USER } from "../data/mockUser";
import { AppButton } from "../components/ui/Button/AppButton";
import { AppTextField } from "../components/ui/TextField/AppTextField";
import { PageCenteringWrapper, PageCard, SectionDivider } from "../components/ui/Page";
import { LargeAvatar } from "../components/ui/Avatar";

export default function Profile() {
  const [username, setUsername] = useState(MOCK_USER.username);
  const [email, setEmail] = useState(MOCK_USER.email);
  const [changePassword, setChangePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    MOCK_USER.avatar
  );
  const [openSnack, setOpenSnack] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Later → API call
    setOpenSnack(true);
  };

  return (
    <>
      <PageCenteringWrapper>
        <PageCard intent="base" elevation={2} maxWidth={720}>
          <AppTypography intent="headingMedium">Profile</AppTypography>
          <AppTypography intent="bodySecondary">Manage your account information</AppTypography>

          <SectionDivider />

          <AppBox component="form" onSubmit={handleSave}>
            <AppStack gap="md">
              {/* Avatar */}
              <AppStack direction="row" gap="md" alignItems="center">
                <LargeAvatar
                  src={avatarPreview ?? undefined}
                  alt={username || MOCK_USER.username}
                />

                <AppButton
                  intent="secondary"
                  component="label"
                  startIcon={<PhotoCameraOutlinedIcon />}
                >
                  Change photo
                  <input hidden type="file" accept="image/*" onChange={handleImageChange} />
                </AppButton>

              </AppStack>

              {/* Username */}
              <AppTextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* Email */}
              <AppTextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Change password toggle */}
              <FormControlLabel
                control={
                  <Switch
                    checked={changePassword}
                    onChange={() => setChangePassword((p) => !p)}
                  />
                }
                label="Change password"
              />

              {changePassword && (
                <AppTextField
                  label="New password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  helperText="Minimum 6 characters"
                />
              )}

              {/* Actions */}
              <AppStack direction="row" gap="sm" justifyContent="flex-end">
                <AppButton intent="secondary">Cancel</AppButton>
                
                <AppButton type="submit" intent="primary">
                  Save changes
                </AppButton>
                
              </AppStack>
            </AppStack>
          </AppBox>
        </PageCard>
      </PageCenteringWrapper>

      <Snackbar
        open={openSnack}
        autoHideDuration={1200}
        onClose={() => setOpenSnack(false)}
      >
        <Alert severity="success" variant="filled">
          Profile updated successfully
        </Alert>
      </Snackbar>
    </>
  );
}
