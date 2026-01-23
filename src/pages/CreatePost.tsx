import { useCallback, useMemo, useState } from "react";
import {
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
  Autocomplete,
  Chip,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { useNavigate } from "react-router-dom";
import { DescriptionText } from "../components/ui/Typography";

const TAG_OPTIONS = [
  "React",
  "TypeScript",
  "MUI",
  "JavaScript",
  "Design",
  "Tutorial",
  "Performance",
];

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [openSnack, setOpenSnack] = useState(false);

  const tagOptions = useMemo(() => TAG_OPTIONS, []);

  /* -------------------- Image Upload -------------------- */
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

  /* -------------------- Form Actions -------------------- */
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

  /* -------------------- UI -------------------- */
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 2,
          py: 6,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            maxWidth: 900,
            p: { xs: 2.5, md: 4 },
          }}
        >
          {/* Header */}
          <Typography variant="h5" fontWeight={600}>
            Create New Post
          </Typography>
          
          <DescriptionText>
            Share your thoughts with the community
          </DescriptionText>

          <Divider sx={{ my: 3 }} />

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Image Upload */}
              <Stack spacing={1}>
                <Typography variant="subtitle2">Cover image</Typography>

                <Box
                  sx={{
                    border: "1px dashed",
                    borderColor: "divider",
                    borderRadius: 2,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {imagePreview && (
                    <Box
                      component="img"
                      src={imagePreview}
                      alt="Preview"
                      sx={{
                        width: 140,
                        height: 90,
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                  )}

                  <Button
                    variant="outlined"
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
                  </Button>
                </Box>
              </Stack>

              {/* Title */}
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
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
                  <TextField
                    {...params}
                    label="Tags"
                    placeholder="Select relevant tags"
                  />
                )}
              />

              {/* Description */}
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                minRows={6}
                fullWidth
              />

              {/* Actions */}
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="text" onClick={resetForm}>
                  Reset
                </Button>
                <Button type="submit" variant="contained">
                  Publish
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Box>

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
