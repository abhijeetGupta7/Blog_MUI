import React, { useMemo, lazy } from "react";
import Grid from "@mui/material/Grid";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import AppCard from "../components/AppCard";
const BlogCarousel = lazy(() => import("../components/BlogCarousel"));
import PageLoader from "../components/PageLoader";
import { BLOG_POSTS } from "../data/mockData";
import { Link as RouterLink } from "react-router-dom";
import { AppButton } from "../components/ui/Button/AppButton";
import { AppStack } from "../components/ui/layout";
import { SectionHeader, SectionTitle } from "../components/ui/Home";

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

      <AppStack gap="lg">
        <SectionHeader>
          <SectionTitle>
            <AppTypography intent="headingLarge">Recent Blogs</AppTypography>
            <AppTypography intent="bodySecondary">
              Latest thoughts from the community
            </AppTypography>
          </SectionTitle>

        
          <AppButton component={RouterLink} to="/blogs" intent="text">
            View all
          </AppButton>
        </SectionHeader>

        <Grid container spacing={4}>
          {cards}
        </Grid>
      </AppStack>
    </>
  );
}
