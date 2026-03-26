import { baseURL } from "@/resources";

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
