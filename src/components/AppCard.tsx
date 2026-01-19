import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

type AppCardProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onActionClick?: () => void;
};

export default function AppCard({
  title,
  description,
  actionLabel = "Read More",
  onActionClick,
}: AppCardProps) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {onActionClick && (
        <CardActions>
          <Button size="small" onClick={onActionClick}>
            {actionLabel}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
