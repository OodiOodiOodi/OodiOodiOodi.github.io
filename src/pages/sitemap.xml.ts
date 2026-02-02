import { type APIRoute } from 'astro';
import { cities } from '../data/cities';

export const prerender = true;

export const GET: APIRoute = () => {
  const baseUrl = 'https://ooodioodioodi.github.io';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = [
    // Homepage
    { loc: `${baseUrl}/`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    // About
    { loc: `${baseUrl}/about`, lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    // Country Pages
    { loc: `${baseUrl}/china`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/usa`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    // China Cities
    ...cities.filter(c => c.country === 'china').map(city => ({
      loc: `${baseUrl}/china/${city.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    })),
    // USA Cities
    ...cities.filter(c => c.country === 'usa').map(city => ({
      loc: `${baseUrl}/usa/${city.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
