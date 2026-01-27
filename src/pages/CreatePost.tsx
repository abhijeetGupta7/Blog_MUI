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
import { PageCenteringWrapper, PageCard, SectionDivider } from "../components/ui/Page";
import { UploadPlaceholder, ImagePreview } from "../components/ui/Form";

// ----------------------------------------------------------------------
// STYLED COMPONENTS (Page-specific overrides)
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

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [openSnack, setOpenSnack] = useState(false);

  const tagOptions = useMemo(() => TAG_OPTIONS, []);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => setImagePreview(String(reader.result));
      reader.readAsDataURL(file);
    },
    []
  );

  const resetForm = useCallback(() => {
    setTitle("");
    setDescription("");
    setTags([]);
    setImagePreview(null);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const createdPost = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        tags,
        image: imagePreview,
        createdAt: new Date().toISOString(),
      };

      const raw = localStorage.getItem("created_posts");
      const existing = raw ? JSON.parse(raw) : [];
      localStorage.setItem(
        "created_posts",
        JSON.stringify([createdPost, ...existing])
      );

      setOpenSnack(true);

      setTimeout(() => {
        resetForm();
        navigate("/");
      }, 800);
    },
    [title, description, tags, imagePreview, navigate, resetForm]
  );

  return (
    <>
      <PageCenteringWrapper>
        <CreatePostCard intent="base" elevation={2} maxWidth={900}>
          {/* Header */}
          <AppTypography intent="headingMedium">Create New Post</AppTypography>

          <AppTypography intent="bodySecondary">Share your thoughts with the community</AppTypography>

          <SectionDivider />

          {/* Form */}
          <AppBox component="form" onSubmit={handleSubmit}>
            <AppStack gap="md">
              {/* Image Upload */}
              <AppStack gap="xs">
                <AppTypography intent="headingSmall">Cover image</AppTypography>

                <UploadPlaceholder>
                  {imagePreview && (
                    <ImagePreview
                      component="img"
                      src={imagePreview}
                      alt="Preview"
                    />
                  )}

                  <AppButton
                    intent="secondary"
                    component="label"
                    startIcon={<PhotoCameraOutlinedIcon />}
                  >
                    Upload image
                    <input hidden type="file" accept="image/*" onChange={handleImageChange} />
                  </AppButton>
                </UploadPlaceholder>
              </AppStack>

              {/* Title */}
              <AppTextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              {/* Tags */}
              <Autocomplete
                multiple
                options={tagOptions}
                value={tags}
                onChange={(_, val) => setTags(val)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                minRows={6}
              />

              {/* Actions */}
              <AppStack direction="row" gap="sm" justifyContent="flex-end">
            
                <AppButton intent="text" onClick={resetForm}>
                  Reset
                </AppButton>
                
                <AppButton type="submit">
                  Publish
                </AppButton>
              </AppStack>
            </AppStack>
          </AppBox>
        </CreatePostCard>
      </PageCenteringWrapper>

      {/* Feedback */}
      <Snackbar
        open={openSnack}
        autoHideDuration={1200}
        onClose={() => setOpenSnack(false)}
      >
        <Alert severity="success" variant="filled">
          Post created successfully
        </Alert>
      </Snackbar>
    </>
  );
}
