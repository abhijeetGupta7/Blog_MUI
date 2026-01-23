import { Card, CardContent, CardActionArea, Typography, CardMedia, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type AppCardProps = {
  title: string;
  description: string;
  image?: string;
  href:string;
};

export default function AppCard({
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
                sx={{
                  transition: "transform 0.4s ease-in-out",
                }}
            />
            )}
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
            <Typography 
            variant="h6" 
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
            </Typography>

            <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
                // Description Clamping
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
            }}
            >
            {description}
            </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}