// Next.js App Router convention: this file generates /robots.txt at build time.
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

export default function robots() {
  const siteUrl = "https://your-domain.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
