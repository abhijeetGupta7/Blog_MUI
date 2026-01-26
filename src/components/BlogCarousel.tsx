import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// System Components; 
import { BLOG_POSTS } from "../data/mockData";
import { AppStack } from "./ui/layout";
import { AppHeroCard } from "./ui/Card/AppHeroCard";
import { AppTypography } from "./ui/Typography/AppTypography";

/* -------------------------------------------------------------------------- */
/* WRAPPER (Handles Logic: Intersection Observer)                             */
/* -------------------------------------------------------------------------- */

function HeroCard({ item }: { item: typeof BLOG_POSTS[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px -30% 0px -30%",
        threshold: 0.6,
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <AppHeroCard
      ref={cardRef}
      active={active}
      image={item.image}
      title={item.title}
      description={item.description}
      href={`/blog/${item.id}`} // Mock link
      // Inject the Chip into the custom slot
      topContent={
        <Chip
          label="Featured"
          size="small"
          sx={{ bgcolor: "white", color: "black", fontWeight: 700 }}
        />
      }
    />
  );
}

const MemoHeroCard = React.memo(HeroCard);

/* -------------------------------------------------------------------------- */
/* CAROUSEL TRACK                                                             */
/* -------------------------------------------------------------------------- */

export default function HeroCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 460 : -460,
      behavior: "smooth",
    });
  };

  return (
    <AppStack gap="lg" sx={{ py: 6 }}>
      
      {/* HEADER */}
      <AppStack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center"
        sx={{ px: { xs: 2, md: 0 } }}
      >
        <AppTypography intent="headingLarge">
          Featured Blogs
        </AppTypography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton onClick={() => scroll("left")}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => scroll("right")}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </AppStack>

      {/* TRACK (Kept as Box for specific scroll logic) */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          px: { xs: 2, md: "calc(50vw - 210px)" }, // Center logic preserved
          pb: 4,

          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {BLOG_POSTS.map((item) => (
          <MemoHeroCard key={item.id} item={item} />
        ))}
      </Box>
      
    </AppStack>
  );
}