import { baseURL } from "@/resources";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/assets/resume.pdf"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
