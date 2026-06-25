import { Log } from "logging-middleware";

const API_URL = "http://4.224.186.213/evaluation-service/notifications";
const token = import.meta.env.VITE_LOG_TOKEN;

export async function fetchNotifications() {
  try {
    await Log(
      token,
      "frontend",
      "info",
      "api",
      "Fetching notifications from API"
    );

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      await Log(
        token,
        "frontend",
        "error",
        "api",
        "Failed to fetch notifications"
      );
      throw new Error("Failed to fetch notifications");
    }

    const data = await response.json();

    await Log(
      token,
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return data.notifications;
  } catch (error) {
    await Log(
      token,
      "frontend",
      "fatal",
      "api",
      error.message
    );

    throw error;
  }
}