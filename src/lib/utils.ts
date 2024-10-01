import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS class names using the clsx and twMerge utilities.
 * @param {...ClassValue[]} inputs - An array of class values to be combined and merged.
 * @returns {string} A string of merged and deduplicated CSS class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a time duration in seconds into a human-readable string
 * @param {number} seconds - The total number of seconds to format
 * @returns {string} A formatted string representing the time duration (e.g., "2h 30m 15s")
 */
export function formatTimeDelta(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secs = Math.floor(seconds - hours * 3600 - minutes * 60);
  const parts = [];
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  if (secs > 0) {
    parts.push(`${secs}s`);
  }
  return parts.join(" ");
}
