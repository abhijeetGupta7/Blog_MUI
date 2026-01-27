import React, { useRef, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BLOG_POSTS } from "../data/mockData";
import { AppStack } from "./ui/layout";
import { AppHeroCard } from "./ui/Card/AppHeroCard";
import { AppTypography } from "./ui/Typography/AppTypography";
import {
  CarouselHeader,
  CarouselNavigation,
  CarouselTrack,
} from "./ui/Carousel";
import { AppChip } from "./ui/Chip/AppChip";

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
      href={`/blog/${item.id}`}
      topContent={<AppChip label="Featured" size="small" />}
    />
  );
}

const MemoHeroCard = React.memo(HeroCard);

export default function HeroCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 460 : -460,
      behavior: "smooth",
    });
  };

  return (
    <AppStack gap="lg" py={6}>
      {/* HEADER */}
      <CarouselHeader
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <AppTypography intent="headingLarge">Featured Blogs</AppTypography>

        <CarouselNavigation>
          <IconButton onClick={() => scroll("left")} aria-label="Scroll left">
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => scroll("right")} aria-label="Scroll right">
            <ArrowForwardIosIcon />
          </IconButton>
        </CarouselNavigation>
      </CarouselHeader>

      {/* TRACK */}
      <CarouselTrack ref={scrollRef}>
        {BLOG_POSTS.map((item) => (
          <MemoHeroCard key={item.id} item={item} />
        ))}
      </CarouselTrack>
    </AppStack>
  );
}
