import { useRef, useEffect } from "react";
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  Chip,
} from "@mui/material";

type CarouselItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

type Props = {
  items: CarouselItem[];
};

export default function MaterialCarousel({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(
        container.querySelectorAll<HTMLElement>("[data-carousel-item]")
      );

      const containerCenter =
        container.scrollLeft + container.offsetWidth / 2;

      cards.forEach((card) => {
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(containerCenter - cardCenter);
        const maxDistance = container.offsetWidth;

        // ---- SCALE (size morphing) ----
        const scale = Math.max(
          0.88,
          1 - distance / maxDistance
        );

        // ---- OPACITY ----
        const opacity = Math.max(
          0.5,
          1 - distance / (maxDistance * 0.9)
        );

        // ---- PARALLAX ----
        const image = card.querySelector<HTMLElement>(
          "[data-carousel-image]"
        );
        if (image) {
          image.style.transform = `translateX(${
            (containerCenter - cardCenter) * 0.08
          }px) scale(1.1)`;
        }

        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      });
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Featured Stories
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollPaddingInline: "50%",
          px: { xs: 2, md: 6 },

          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            data-carousel-item
            sx={{
              minWidth: { xs: 260, md: 320 },
              height: 420,
              flexShrink: 0,
              scrollSnapAlign: "center",
              borderRadius: 4,
              overflow: "hidden",
              transition:
                "transform 0.35s cubic-bezier(.2,.8,.2,1), opacity 0.35s",
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                "& .MuiCardActionArea-focusHighlight": {
                  display: "none",
                },
              }}
            >
              {/* Image Layer */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  data-carousel-image
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "110%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.35s ease-out",
                  }}
                />
              </Box>

              {/* Gradient */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.2))",
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  p: 3,
                  color: "white",
                }}
              >
                <Chip
                  label={item.category}
                  size="small"
                  sx={{
                    mb: 1,
                    bgcolor: "rgba(255,255,255,0.25)",
                    color: "white",
                    backdropFilter: "blur(6px)",
                  }}
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ lineHeight: 1.2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
