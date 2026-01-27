import { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

import { AppStack, AppGrid } from "../components/ui/layout";
import { AppTypography } from "../components/ui/Typography/AppTypography";
import { AppTextField } from "../components/ui/TextField/AppTextField";
import { AppDivider } from "../components/ui/Divider/AppDivider";
import { AppChip } from "../components/ui/Chip/AppChip";
import { SelectWrapper } from "../components/ui/Form";

import AppCard from "../components/AppCard";
import { BLOG_POSTS } from "../data/mockData";

const TAGS = ["React", "MUI", "Design", "Performance", "Tutorial"] as const;
type SortOption = "latest" | "oldest";

type BlogFilters = {
  search: string;
  tag: string | null;
  sort: SortOption;
};

const DEFAULT_FILTERS: BlogFilters = {
  search: "",
  tag: null,
  sort: "latest",
};

export default function Blogs() {
  const [filters, setFilters] = useState<BlogFilters>(DEFAULT_FILTERS);

  const updateFilters = (patch: Partial<BlogFilters>) => {
    setFilters((prev) => ({ ...prev, ...patch }));
  };

  const filteredPosts = useMemo(() => {
    if (!Array.isArray(BLOG_POSTS)) return [];

    let posts = BLOG_POSTS;

    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(query)
      );
    }

    if (filters.tag) {
      const tag = filters.tag.toLowerCase();
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(tag)
      );
    }

    return [...posts].sort((a, b) =>
      filters.sort === "latest" ? b.id - a.id : a.id - b.id
    );
  }, [filters]);

  return (
    <AppStack gap="lg">
      {/* HEADER */}
      <AppStack gap="xs">
        <AppTypography intent="headingLarge">All Blogs</AppTypography>
        <AppTypography intent="bodyPrimary">
          Browse, search, and explore all published articles
        </AppTypography>
      </AppStack>

      {/* FILTER BAR */}
      <AppStack direction={{ xs: "column", md: "row" }} gap="sm">
        <AppTextField
          placeholder="Search blogs…"
          value={filters.search}
          onChange={(e) =>
            updateFilters({ search: e.target.value ?? "" })
          }
          startIcon={<SearchIcon />}
        />

        <SelectWrapper
          value={filters.sort}
          onChange={(e) =>
            updateFilters({ sort: e.target.value as SortOption })
          }
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </SelectWrapper>
      </AppStack>

      {/* TAG FILTER */}
      <AppStack direction="row" gap="xs" flexWrap="wrap">
        <AppChip
          label="All"
          clickable
          color={!filters.tag ? "primary" : "default"}
          onClick={() => updateFilters({ tag: null })}
        />

        {TAGS.map((tag) => (
          <AppChip
            key={tag}
            label={tag}
            clickable
            color={filters.tag === tag ? "primary" : "default"}
            onClick={() => updateFilters({ tag })}
          />
        ))}
      </AppStack>

      <AppDivider />

      {/* BLOG GRID */}
      <AppGrid container spacing={4}>
        {filteredPosts.map((post) => (
          <AppGrid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <AppCard
              title={post.title}
              description={post.description}
              image={post.image}
              href={`/blog/${post.id}`}
            />
          </AppGrid>
        ))}
      </AppGrid>

      {/* EMPTY STATE */}
      {filteredPosts.length === 0 && (
        <AppStack alignItems="center" gap="xl">
          <AppTypography intent="bodySecondary">
            No blogs found.
          </AppTypography>
        </AppStack>
      )}
    </AppStack>
  );
}
