/**
 * Converts a string to a URL-safe slug.
 * "Home & Space" → "home-and-space"
 * "Indoor plants" → "indoor-plants"
 */
export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Formats an ISO date string to a readable date.
 * "2024-03-15" → "15 March 2024"
 */
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
