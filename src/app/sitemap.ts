import type { MetadataRoute } from "next";
import { NAV } from "@/lib/site";

const BASE = "https://publiciart.com.br";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((item) => ({
    url: `${BASE}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
