import { Card, CardContent, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {notification?.Type || notification?.type}
        </Typography>

        <Typography variant="body1">
          {notification?.Message || notification?.message}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {notification?.Timestamp || notification?.timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}