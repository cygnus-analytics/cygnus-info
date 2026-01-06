export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/privacy'],
      },
      sitemap: 'https://cygnussolutions.co.in/sitemap.xml',
    }
  }