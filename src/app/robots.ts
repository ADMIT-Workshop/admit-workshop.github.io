import type { MetadataRoute } from "next";
import { workshop } from "@/data/workshop";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", workshop.seo.siteUrl).href,
  };
}
