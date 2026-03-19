import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://berkeozbek.com", lastModified: new Date() },
    { url: "https://berkeozbek.com/resume", lastModified: new Date() },
    { url: "https://berkeozbek.com/projects", lastModified: new Date() },
    { url: "https://berkeozbek.com/contact", lastModified: new Date() },
  ];
}
