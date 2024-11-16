import { paraglide } from '@inlang/paraglide-next/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
}

export default paraglide({
    paraglide: {
        project: './project.inlang',
        outdir: './src/paraglide'
    },
    ...nextConfig
})
