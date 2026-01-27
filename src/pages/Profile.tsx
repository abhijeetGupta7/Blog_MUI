import { useState, useCallback } from "react";
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
import {
  PageCenteringWrapper,
  PageCard,
  SectionDivider,
} from "../components/ui/Page";
import { LargeAvatar } from "../components/ui/Avatar";

type ProfileForm = {
  username: string;
  email: string;
  password: string;
  changePassword: boolean;
  avatarPreview: string | null;
};

const INITIAL_FORM: ProfileForm = {
  username: MOCK_USER.username,
  email: MOCK_USER.email,
  password: "",
  changePassword: false,
  avatarPreview: MOCK_USER.avatar,
};

export default function Profile() {
  const [form, setForm] = useState<ProfileForm>(INITIAL_FORM);
  const [openSnack, setOpenSnack] = useState(false);

  const updateForm = useCallback(
    (patch: Partial<ProfileForm>) => {
      setForm((prev) => ({ ...prev, ...patch }));
    },
    []
  );

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () =>
        updateForm({ avatarPreview: String(reader.result ?? null) });
      reader.readAsDataURL(file);
    },
    [updateForm]
  );

  const handleSave = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // later → API call
      setOpenSnack(true);
    },
    []
  );

  return (
    <>
      <PageCenteringWrapper>
        <PageCard intent="base" elevation={2} maxWidth={720}>
          <AppTypography intent="headingMedium">Profile</AppTypography>
          <AppTypography intent="bodySecondary">
            Manage your account information
          </AppTypography>

          <SectionDivider />

          <AppBox component="form" onSubmit={handleSave}>
            <AppStack gap="md">
              {/* Avatar */}
              <AppStack direction="row" gap="md" alignItems="center">
                <LargeAvatar
                  src={form.avatarPreview ?? undefined}
                  alt={form.username}
                />

                <AppButton
                  intent="secondary"
                  component="label"
                  startIcon={<PhotoCameraOutlinedIcon />}
                >
                  Change photo
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </AppButton>
              </AppStack>

              <AppTextField
                label="Username"
                value={form.username}
                onChange={(e) =>
                  updateForm({ username: e.target.value ?? "" })
                }
              />

              <AppTextField
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  updateForm({ email: e.target.value ?? "" })
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={form.changePassword}
                    onChange={() =>
                      updateForm({
                        changePassword: !form.changePassword,
                        password: "",
                      })
                    }
                  />
                }
                label="Change password"
              />

              {form.changePassword && (
                <AppTextField
                  label="New password"
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    updateForm({ password: e.target.value ?? "" })
                  }
                  helperText="Minimum 6 characters"
                />
              )}

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
