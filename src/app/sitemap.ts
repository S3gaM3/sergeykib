import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts } from "@/utils/utils";

export const dynamic = "force-static";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const allPostDates = [...blogs, ...works]
    .map((entry) => entry.lastModified)
    .filter((value): value is string => typeof value === "string" && value.length > 0)
    .sort();

  const stableLastModified = allPostDates.at(-1) ?? "2026-01-01";

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: stableLastModified,
  }));

  return [...routes, ...blogs, ...works];
}
