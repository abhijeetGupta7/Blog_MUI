import { useMemo, useState } from "react";
import { AppStack } from "../components/ui/layout";
import Grid from "@mui/material/Grid";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import AppCard from "../components/AppCard";
import { BLOG_POSTS } from "../data/mockData";
import { AppTextField } from "../components/ui/TextField/AppTextField";
import { SelectWrapper } from "../components/ui/Form";

const TAGS = ["React", "MUI", "Design", "Performance", "Tutorial"];
type SortOption = "latest" | "oldest";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("latest");

  const filteredPosts = useMemo(() => {
    let posts = [...BLOG_POSTS];

    if (search) {
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedTag) {
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(selectedTag.toLowerCase())
      );
    }

    posts.sort((a, b) =>
      sort === "latest" ? b.id - a.id : a.id - b.id
    );

    return posts;
  }, [search, selectedTag, sort]);

  const postCards = useMemo(
    () =>
      filteredPosts.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <AppCard
            title={post.title}
            description={post.description}
            image={post.image}
            href={`/blog/${post.id}`}
          />
        </Grid>
      )),
    [filteredPosts]
  );

  return (
    <AppStack gap="lg">
      {/* PAGE HEADER */}
      <AppStack gap="xs">
        <AppTypography intent="headingLarge">All Blogs</AppTypography>
        <AppTypography intent="bodyPrimary">
          Browse, search, and explore all published articles
        </AppTypography>
      </AppStack>

      {/* FILTER BAR */}
      <AppStack direction={{ xs: "column", md: "row" }} gap="sm">
        {/* SEARCH */}
        <AppTextField
          placeholder="Search blogs…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startIcon={<SearchIcon />}
        />

        {/* SORT */}
        <SelectWrapper
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </SelectWrapper>
      </AppStack>

      {/* TAG FILTER */}
      <AppStack direction="row" gap="xs" flexWrap="wrap">
        <Chip
          label="All"
          clickable
          color={!selectedTag ? "primary" : "default"}
          onClick={() => setSelectedTag(null)}
        />
        {TAGS.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            clickable
            color={selectedTag === tag ? "primary" : "default"}
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </AppStack>

      <Divider />

      {/* BLOG GRID */}
      <Grid container spacing={4}>
        {postCards}
      </Grid>

      {/* EMPTY STATE */}
      {filteredPosts.length === 0 && (
        <AppStack alignItems="center" gap="xl">
          <AppTypography intent="bodySecondary">No blogs found.</AppTypography>
        </AppStack>
      )}
    </AppStack>
  );
}
