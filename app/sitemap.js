// Next.js App Router convention: this file generates /sitemap.xml at build time.
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
//
// This is a one-page site, so there's a single entry with anchors for each
// section. If you ever add more routes, add another object to the array.

export default function sitemap() {
  const siteUrl = "https://your-domain.vercel.app";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
