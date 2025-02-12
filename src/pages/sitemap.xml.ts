import type { NextApiResponse } from "next";

import products from "@/utils/data/products";
const Sitemap = () => {};

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const baseUrl = "https://yourdomain.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${products
        .map(
          (product) => `
          <url>
            <loc>${baseUrl}/products/${product.id}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `,
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default Sitemap;
