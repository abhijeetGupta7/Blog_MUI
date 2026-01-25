import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { MOCK_USER } from "../data/mockUser";
import { AppButton } from "../components/ui/Button/AppButton";

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
      <Box sx={{ display: "flex", justifyContent: "center", py: 6, px: 2 }}>
        <Paper sx={{ width: "100%", maxWidth: 720, p: 4 }} elevation={2}>
          <AppTypography intent="headingMedium">Profile</AppTypography>
          <AppTypography intent="bodySecondary">Manage your account information</AppTypography>

          <Divider sx={{ my: 3 }} />

          <Box component="form" onSubmit={handleSave}>
            <Stack spacing={3}>
              {/* Avatar */}
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar
                  src={avatarPreview ?? undefined}
                  sx={{ width: 96, height: 96 }}
                />

                <AppButton
                  intent="secondary"
                  component="label"
                  startIcon={<PhotoCameraOutlinedIcon />}
                >
                  Change photo
                  <input hidden type="file" accept="image/*" onChange={handleImageChange} />
                </AppButton>

              </Stack>

              {/* Username */}
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />

              {/* Email */}
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
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
                <TextField
                  label="New password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  helperText="Minimum 6 characters"
                />
              )}

              {/* Actions */}
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <AppButton intent="secondary">Cancel</AppButton>
                
                <AppButton type="submit" intent="primary">
                  Save changes
                </AppButton>
                
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Box>

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
