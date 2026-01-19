import { Grid } from "@mui/material";
import AppCard from "../components/AppCard";
  
  export default function Home() {

    const posts = [
        {
          id: 1,
          title: "Understanding React Router v6",
          description:
            "Learn how layout routes and Outlet help you build scalable React apps.",
        },
        {
          id: 2,
          title: "Dark Mode in MUI",
          description:
            "How to implement a persisted dark mode with system preference fallback.",
        },
        {
          id: 3,
          title: "Reusable Components in React",
          description:
            "Why building reusable UI components saves time and reduces bugs.",
        },
        {
            id: 1,
            title: "Understanding React Router v6",
            description:
              "Learn how layout routes and Outlet help you build scalable React apps.",
          },
          {
            id: 2,
            title: "Dark Mode in MUI",
            description:
              "How to implement a persisted dark mode with system preference fallback.",
          },
          {
            id: 3,
            title: "Reusable Components in React",
            description:
              "Why building reusable UI components saves time and reduces bugs.",
          },
      ];

    return (
        <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid
            key={post.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <AppCard
              title={post.title}
              description={post.description}
            />
          </Grid>
        ))}
      </Grid>
      
    );
  }
  
