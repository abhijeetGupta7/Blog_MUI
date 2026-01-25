import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { alpha } from "@mui/material/styles";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BLOG_POSTS } from "../data/mockData";

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
    <Card
      ref={cardRef}
      elevation={0}
      sx={{
        minWidth: { xs: 300, md: 520 },
        height: 520,
        flexShrink: 0,
        scrollSnapAlign: "center",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",

        transform: active ? "scale(1)" : "scale(0.85)",
        opacity: active ? 1 : 0.5,

        transition:
          "transform 600ms cubic-bezier(0.2,0,0,1), opacity 400ms ease",
        willChange: "transform, opacity",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          "& .MuiCardActionArea-focusHighlight": { display: "none" },
        }}
      >
        {/* IMAGE */}
        <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: active ? "scale(1.15)" : "scale(1)",
              transition: "transform 800ms cubic-bezier(0.2,0,0,1)",
              willChange: "transform",
            }}
          />

          {/* GRADIENT */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${alpha(
                "#000",
                0.85
              )} 0%, transparent 60%)`,
            }}
          />
        </Box>

        {/* CONTENT */}
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            p: 4,
            color: "white",
            transform: active ? "translateY(0)" : "translateY(20px)",
            transition: "transform 500ms cubic-bezier(0.2,0,0,1)",
          }}
        >
          <Chip
            label="Featured"
            size="small"
            sx={{
              mb: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          />

          <Typography variant="h4" fontWeight={800} lineHeight={1.1} mb={1}>
            {item.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.85)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              maxHeight: active ? 80 : 0,
              opacity: active ? 1 : 0,
              transition: "opacity 300ms ease, max-height 300ms ease",
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const MemoHeroCard = React.memo(HeroCard);

/* -------------------------------------------------------------------------- */
/* HERO CAROUSEL */
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
    <Box sx={{ py: 6 }}>
      {/* HEADER */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" fontWeight={800}>
          Featured Blogs
        </Typography>
{/* 
        <DescriptionText>
          Latest thoughts from the community
        </DescriptionText> */}

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton onClick={() => scroll("left")}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => scroll("right")}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* TRACK */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          px: { xs: 2, md: "calc(50vw - 210px)" },
          pb: 4,

          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {BLOG_POSTS.map((item) => (
          <MemoHeroCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}
