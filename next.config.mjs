import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPrefix = basePath ? `${basePath}/` : undefined;

const normalizedBasePath = basePath === "/" ? "" : basePath.replace(/\/$/, "");

const nextConfig = {
  output: "export",
  /** Разрешить HMR/dev-ресурсы при открытии с другого хоста в LAN (например http://192.168.1.130:3000) */
  allowedDevOrigins: ["192.168.1.130"],
  basePath: normalizedBasePath,
  assetPrefix,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
