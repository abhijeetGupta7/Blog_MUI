import React, { useMemo, lazy } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppCard from "../components/AppCard";
const BlogCarousel = lazy(() => import("../components/BlogCarousel"));
import PageLoader from "../components/PageLoader";
import { BLOG_POSTS } from "../data/mockData";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  const cards = useMemo(
    () =>
      BLOG_POSTS.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <AppCard
            title={post.title}
            description={post.description}
            image={post.image}
            href={`/blog/${post.id}`}
          />
        </Grid>
      )),
    []
  );

  return (
    <>
      <React.Suspense fallback={<PageLoader />}>
        <BlogCarousel />
      </React.Suspense>

      <Box>
        <Box>
          <Box>
            <Typography variant="h3" fontWeight={800}>
              Recent Blogs
            </Typography>

              <Typography color="text.secondary" variant="body2"> Latest thoughts from the community </Typography>              
          </Box>

          <Button
            component={RouterLink}
            to="/blogs"
            variant="text"
          >
            View all
          </Button>
        </Box>

        <Grid container spacing={4}>{cards}</Grid>
      </Box>
    </>
  );
}
