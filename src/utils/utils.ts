import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { cache } from "react";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt?: string;
  summary: string;
  image?: string;
  images: string[];
  tags: string[];
  team: Team[];
  link?: string;
};

function normalizeTags(raw: unknown): string[] {
  if (raw == null) {
    return [];
  }
  if (Array.isArray(raw)) {
    return raw.filter((item): item is string => typeof item === "string");
  }
  if (typeof raw === "string") {
    return [raw];
  }
  return [];
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const imageRaw = data.image;
  const image =
    typeof imageRaw === "string" && imageRaw.trim() !== "" ? imageRaw.trim() : undefined;

  const linkRaw = data.link;
  const link = typeof linkRaw === "string" && linkRaw.trim() !== "" ? linkRaw.trim() : undefined;

  const publishedAt =
    typeof data.publishedAt === "string" && data.publishedAt.trim() !== ""
      ? data.publishedAt.trim()
      : undefined;

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt,
    summary: data.summary || "",
    image,
    images: Array.isArray(data.images) ? data.images : [],
    tags: normalizeTags(data.tag ?? data.tags),
    team: Array.isArray(data.team) ? data.team : [],
    link,
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

const getCachedPosts = cache((joinedPath: string) => {
  const pathParts = joinedPath ? joinedPath.split("/") : [];
  const postsDir = path.join(process.cwd(), ...pathParts);
  return getMDXData(postsDir);
});

export function getPosts(customPath = ["", "", "", ""]) {
  const joinedPath = customPath.filter(Boolean).join("/");
  return getCachedPosts(joinedPath);
}

/** For sorting MDX posts by date; missing or invalid dates sort as oldest (0). */
export function publishedTimestamp(publishedAt: string | undefined): number {
  if (!publishedAt) {
    return 0;
  }
  const normalized = publishedAt.includes("T") ? publishedAt : `${publishedAt}T00:00:00`;
  const ms = new Date(normalized).getTime();
  return Number.isNaN(ms) ? 0 : ms;
}
