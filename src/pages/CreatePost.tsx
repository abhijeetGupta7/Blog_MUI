import { useCallback, useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { useNavigate } from "react-router-dom";

import { AppBox } from "../components/ui/layout/AppBox";
import { AppStack } from "../components/ui/layout/AppStack";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import { AppButton } from "../components/ui/Button/AppButton";
import { AppTextField } from "../components/ui/TextField/AppTextField";
import {
  PageCenteringWrapper,
  CreatePostCard,
  SectionDivider,
} from "../components/ui/Page";
import { UploadPlaceholder, ImagePreview } from "../components/ui/Form";
import { AppChip } from "../components/ui/Chip/AppChip";

const TAG_OPTIONS = [
  "React",
  "TypeScript",
  "MUI",
  "JavaScript",
  "Design",
  "Tutorial",
  "Performance",
] as const;

type CreatePostForm = {
  title: string;
  description: string;
  tags: string[];
  imagePreview: string | null;
};

const INITIAL_FORM: CreatePostForm = {
  title: "",
  description: "",
  tags: [],
  imagePreview: null,
};

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState<CreatePostForm>(INITIAL_FORM);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const tagOptions = useMemo(() => TAG_OPTIONS, []);

  const updateForm = useCallback((patch: Partial<CreatePostForm>) => {
    setForm((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () =>
        updateForm({ imagePreview: String(reader.result ?? null) });
      reader.readAsDataURL(file);
    },
    [updateForm]
  );

  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const title = form.title.trim();
      const description = form.description.trim();
      if (!title || !description) return;

      const newPost = {
        id: Date.now(),
        title,
        description,
        tags: form.tags,
        image: form.imagePreview,
        createdAt: new Date().toISOString(),
      };

      let existing: unknown[] = [];
      try {
        const raw = localStorage.getItem("created_posts");
        existing = raw ? JSON.parse(raw) : [];
      } catch {
        console.log("Not created");
      }

      localStorage.setItem(
        "created_posts",
        JSON.stringify([newPost, ...existing])
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
          <AppTypography intent="headingMedium">
            Create New Post
          </AppTypography>
          <AppTypography intent="bodySecondary">
            Share your thoughts with the community
          </AppTypography>

          <SectionDivider />

          <AppBox component="form" onSubmit={handleSubmit}>
            <AppStack gap="md">
              <AppStack gap="xs">
                <AppTypography intent="headingSmall">
                  Cover image
                </AppTypography>

                <UploadPlaceholder>
                  {form.imagePreview && (
                    <ImagePreview
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

              <AppTextField
                label="Title"
                value={form.title}
                onChange={(e) =>
                  updateForm({ title: e.target.value ?? "" })
                }
                required
              />

              <Autocomplete
                multiple
                options={tagOptions}
                value={form.tags}
                onChange={(_, value) =>
                  updateForm({ tags: value ?? [] })
                }
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <AppChip
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

              <AppTextField
                label="Description"
                value={form.description}
                onChange={(e) =>
                  updateForm({ description: e.target.value ?? "" })
                }
                multiline
                minRows={6}
              />

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
