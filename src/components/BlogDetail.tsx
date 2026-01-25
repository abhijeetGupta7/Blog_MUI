import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppTypography } from "./ui/Typography/AppTypography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BLOG_POSTS } from "../data/mockData";


export default function BlogDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.id === Number(id));

  if (!post) {
    return (
      // SEPARATED PAGE NOT FOUND AND POST NOT FOUND
      <Container sx={{ py: 10, textAlign: "center" }}>
        <AppTypography intent="headingMedium">Post not found</AppTypography>
        <Button onClick={() => navigate("/")} sx={{ mt: 2 }}>
          Go Home
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)}
        sx={{ mb: 4 }}
      >
        Back
      </Button>

      {/* my blog POST */}
      {post.image && (
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          loading="eager"
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: 4,
            mb: 4,
            boxShadow: 3
          }}
        />
      )}

      {/* Title & Meta */}
      <AppTypography intent="headingLarge" component="h1" gutterBottom>{post.title}</AppTypography>
      
      <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
        <Chip label="React" size="small" />
        <Chip label="Tech" size="small" />
        <AppTypography intent="caption">5 min read</AppTypography>
      </Stack>

      {/* Content Body */}
      <AppTypography intent="bodyPrimary">
        {post.description}
      </AppTypography>
    </Container>
  );
}