import type { MetadataRoute } from "next";
import { workshop } from "@/data/workshop";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // This is a single-page site. Section anchors are not separate pages.
  return [{ url: workshop.seo.siteUrl }];
}
