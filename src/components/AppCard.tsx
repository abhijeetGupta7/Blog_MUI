import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { AppTypography } from "./ui/Typography/AppTypography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

type AppCardProps = {
  title: string;
  description: string;
  image?: string;
  href:string;
};

function AppCard({
  title,
  description,
  image,
  href,
}: AppCardProps) {
  return (
    <Card 
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
      }}
    >

        <CardActionArea
            component={RouterLink}
            to={href}
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent:"flex-start",
                // removing the grey effect
                "& .MuiCardActionArea-focusHighlight": {
                    display: "none",
                },
                // image scaling
                "&:hover .MuiCardMedia-root": {
                    transform: "scale(1.15)",
                  },
            }}
        >
      
        <Box sx={{ overflow: "hidden", width: "100%" }}>
            {image && (
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                loading="lazy"
            />
            )}
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
            <AppTypography
            intent="headingSmall"
            gutterBottom
            sx={{
              // Title Clamping
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
            >
            {title}
            </AppTypography>

            <AppTypography
            intent="bodySecondary"
            sx={{
              // Description Clamping
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}
            >
            {description}
            </AppTypography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default React.memo(AppCard);