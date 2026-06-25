import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "logging-middleware";

const token = import.meta.env.VITE_LOG_TOKEN;

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        await Log(
          token,
          "frontend",
          "info",
          "hook",
          "Loading notifications"
        );

        const data = await fetchNotifications();

        setNotifications(data);
      } catch (err) {
        setError(err.message);

        await Log(
          token,
          "frontend",
          "error",
          "hook",
          err.message
        );
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  return {
    notifications,
    loading,
    error,
  };
}