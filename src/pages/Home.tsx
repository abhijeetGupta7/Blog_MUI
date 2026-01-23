import { Box, Button, Grid, Typography } from "@mui/material";
import AppCard from "../components/AppCard";
import BlogCarousel from "../components/BlogCarousel";
import { BLOG_POSTS } from "../data/mockData";
import { Link as RouterLink } from "react-router-dom";
import { DescriptionText } from "../components/ui/Typography";

export default function Home() {
  return (
    <>
      <BlogCarousel />

      <Box sx={{ mt: 8 }}>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight={800}>
              Recent Blogs
            </Typography>

              <DescriptionText>
                Latest thoughts from the community
              </DescriptionText>
          </Box>

          <Button
            component={RouterLink}
            to="/blogs"
            variant="text"
            sx={{ fontWeight: 600 }}
          >
            View all
          </Button>
        </Box>

        {/* CONTENT GRID */}
        <Grid container spacing={4}>
          {BLOG_POSTS.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <AppCard
                title={post.title}
                description={post.description}
                image={post.image}
                href={`/blog/${post.id}`}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
