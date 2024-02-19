export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://extended-pixel.vercel.app/sitemap.xml',
    }
}
