export default function sitemap() {
    return [
        {
            url: 'https://extended-pixel.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://extended-pixel.vercel.app/en',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://extended-pixel.vercel.app/ru',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}
