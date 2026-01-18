export const HISTORY = [];

export function logRoute(route) {
  HISTORY.push({ time: Date.now(), route });
}
