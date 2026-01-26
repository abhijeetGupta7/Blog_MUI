import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import AppCard from "../components/AppCard";
import { BLOG_POSTS } from "../data/mockData";
import { AppTextField } from "../components/ui/TextField/AppTextField";

/* -------------------------------------------------------------------------- */
/* CONFIG */
/* -------------------------------------------------------------------------- */

const TAGS = ["React", "MUI", "Design", "Performance", "Tutorial"];
type SortOption = "latest" | "oldest";

/* -------------------------------------------------------------------------- */
/* PAGE */
/* -------------------------------------------------------------------------- */

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("latest");

  /* ---------------------------------------------------------------------- */
  /* FILTER + SORT LOGIC (mock for now, API later) */
  /* ---------------------------------------------------------------------- */

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

  /* ---------------------------------------------------------------------- */
  /* UI */
  /* ---------------------------------------------------------------------- */

  return (
    <Box>
      {/* PAGE HEADER */}
      <Box sx={{ mb: 4 }}>
        <AppTypography intent="headingLarge">All Blogs</AppTypography>
        <AppTypography intent="bodyPrimary">Browse, search, and explore all published articles</AppTypography>
      </Box>

      {/* FILTER BAR */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        {/* SEARCH */}
        <AppTextField
          placeholder="Search blogs…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startIcon={<SearchIcon />} 
        />

        {/* SORT */}
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </Stack>

      {/* TAG FILTER */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap" }}>
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
      </Stack>

      <Divider sx={{ mb: 4 }} />

      {/* BLOG GRID */}
      <Grid container spacing={4}>{postCards}</Grid>

      {/* EMPTY STATE */}
      {filteredPosts.length === 0 && (
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <AppTypography intent="bodySecondary">No blogs found.</AppTypography>
        </Box>
      )}
    </Box>
  );
}
