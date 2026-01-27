import { useParams, useNavigate } from "react-router-dom";
import { AppTypography } from "./ui/Typography/AppTypography";
import { AppContainer } from "./ui/layout";
import Chip from "@mui/material/Chip";
import { AppStack } from "./ui/layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BLOG_POSTS } from "../data/mockData";
import { AppButton } from "./ui/Button/AppButton";
import {
  NotFoundContainer,
  BlogImage,
  BackButtonWrapper,
} from "./ui/Blog";
import { styled } from "@mui/material/styles";

const BlogDetailContainer = styled(AppContainer)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <NotFoundContainer>
        <AppTypography intent="headingMedium">Post not found</AppTypography>
        <AppStack gap="sm" alignItems="center" mt={2}>
          <AppButton intent="primary" onClick={() => navigate("/")}>
            Go Home
          </AppButton>
        </AppStack>
      </NotFoundContainer>
    );
  }

  return (
    <BlogDetailContainer maxWidth="md">
      {/* Back Button */}
      <BackButtonWrapper>
        <AppButton
          intent="text"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </AppButton>
      </BackButtonWrapper>

      {/* Blog Image */}
      {post.image && (
        <BlogImage
          src={post.image}
          alt={post.title}
          loading="eager"
        />
      )}

      {/* Title & Meta */}
      <AppTypography intent="headingLarge" component="h1" gutterBottom>
        {post.title}
      </AppTypography>

      <AppStack direction="row" gap="xs">
        <Chip label="React" size="small" />
        <Chip label="Tech" size="small" />
        <AppTypography intent="caption">5 min read</AppTypography>
      </AppStack>

      {/* Content Body */}
      <AppTypography intent="bodyPrimary">{post.description}</AppTypography>
    </BlogDetailContainer>
  );
}
