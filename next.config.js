/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

const extensions = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})

const nextConfig = {
    output: 'export',
    experimental: {
        appDir: true,
    },
}

module.exports = { ...nextConfig, ...extensions };
