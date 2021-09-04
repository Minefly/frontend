export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.minefly.org"
    : "http://localhost:4000";
