import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container, Chip, Stack } from "@mui/material";
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
        <Typography variant="h5">Post not found</Typography>
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
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        {post.title}
      </Typography>
      
      <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
        <Chip label="React" size="small" />
        <Chip label="Tech" size="small" />
        <Typography variant="caption" sx={{ alignSelf: "center", color: "text.secondary" }}>
          5 min read
        </Typography>
      </Stack>

      {/* Content Body */}
      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
        {/* CHECK HERE IN FUTURE AS OF NOW JUST RANDOM STRING USED */}
        {post.description} 
      </Typography>
    </Container>
  );
}