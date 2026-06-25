const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getTopNotifications(notifications = [], limit = 10) {
  return [...notifications]
    .sort((a, b) => {
      const priorityA = PRIORITY[a.Type] || 0;
      const priorityB = PRIORITY[b.Type] || 0;

      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, limit);
}