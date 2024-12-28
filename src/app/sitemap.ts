import { prompts } from "@/core/utils/prompts";
import { MetadataRoute } from "next";

const routes = [
  "https://photowiz.app",
  "https://photowiz.app/terms",
  "https://photowiz.app/faq",
  "https://photowiz.app/prompts",
  "https://photowiz.app/how-it-works",
  ...prompts.map(
    ({ slug }) => `https://photowiz.app/prompts/dreambooth/${slug}`
  ),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: route }));
}
