import { useCallback, useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBox } from "../components/ui/layout/AppBox";
import { AppStack } from "../components/ui/layout/AppStack";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/ui/Button/AppButton";
import { AppTextField } from "../components/ui/TextField/AppTextField";
import {
  PageCenteringWrapper,
  PageCard,
  SectionDivider,
} from "../components/ui/Page";
import { UploadPlaceholder, ImagePreview } from "../components/ui/Form";

// ----------------------------------------------------------------------
// STYLED COMPONENTS
// ----------------------------------------------------------------------

const CreatePostCard = styled(PageCard)(({ theme }) => ({
  padding: theme.spacing(2.5),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

// ----------------------------------------------------------------------
// CONSTANTS
// ----------------------------------------------------------------------

const TAG_OPTIONS = [
  "React",
  "TypeScript",
  "MUI",
  "JavaScript",
  "Design",
  "Tutorial",
  "Performance",
];

const INITIAL_FORM = {
  title: "",
  description: "",
  tags: [] as string[],
  imagePreview: null as string | null,
};

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

export default function CreatePost() {
  const navigate = useNavigate();

  // Bundled form state
  const [form, setForm] = useState(INITIAL_FORM);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const tagOptions = useMemo(() => TAG_OPTIONS, []);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () =>
        setForm((prev) => ({ ...prev, imagePreview: String(reader.result) }));
      reader.readAsDataURL(file);
    },
    []
  );

  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const createdPost = {
        id: Date.now(),
        title: form.title.trim(),
        description: form.description.trim(),
        tags: form.tags,
        image: form.imagePreview,
        createdAt: new Date().toISOString(),
      };

      const raw = localStorage.getItem("created_posts");
      const existing = raw ? JSON.parse(raw) : [];
      localStorage.setItem(
        "created_posts",
        JSON.stringify([createdPost, ...existing])
      );

      setSnackbarOpen(true);

      setTimeout(() => {
        resetForm();
        navigate("/");
      }, 800);
    },
    [form, navigate, resetForm]
  );

  return (
    <>
      <PageCenteringWrapper>
        <CreatePostCard intent="base" elevation={2} maxWidth={900}>
          <AppTypography intent="headingMedium">Create New Post</AppTypography>
          <AppTypography intent="bodySecondary">
            Share your thoughts with the community
          </AppTypography>

          <SectionDivider />

          <AppBox component="form" onSubmit={handleSubmit}>
            <AppStack gap="md">
              {/* Image Upload */}
              <AppStack gap="xs">
                <AppTypography intent="headingSmall">Cover image</AppTypography>

                <UploadPlaceholder>
                  {form.imagePreview && (
                    <ImagePreview
                      component="img"
                      src={form.imagePreview}
                      alt="Preview"
                    />
                  )}

                  <AppButton
                    intent="secondary"
                    component="label"
                    startIcon={<PhotoCameraOutlinedIcon />}
                  >
                    Upload image
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </AppButton>
                </UploadPlaceholder>
              </AppStack>

              {/* Title */}
              <AppTextField
                label="Title"
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />

              {/* Tags */}
              <Autocomplete
                multiple
                options={tagOptions}
                value={form.tags}
                onChange={(_, val) =>
                  setForm((prev) => ({ ...prev, tags: val }))
                }
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      label={option}
                      {...getTagProps({ index })}
                      key={option}
                    />
                  ))
                }
                renderInput={(params) => (
                  <AppTextField
                    {...params}
                    label="Tags"
                    placeholder="Select relevant tags"
                  />
                )}
              />

              {/* Description */}
              <AppTextField
                label="Description"
                value={form.description}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, description: e.target.value }))
                }
                multiline
                minRows={6}
              />

              {/* Actions */}
              <AppStack direction="row" gap="sm" justifyContent="flex-end">
                <AppButton intent="text" onClick={resetForm}>
                  Reset
                </AppButton>
                <AppButton type="submit">Publish</AppButton>
              </AppStack>
            </AppStack>
          </AppBox>
        </CreatePostCard>
      </PageCenteringWrapper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1200}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Post created successfully
        </Alert>
      </Snackbar>
    </>
  );
}