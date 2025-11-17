module.exports = {
    reactStrictMode: true,
    images: {
        domains: [],
        remotePatterns: [],
        unoptimized: true
    },
    // Turbopack configuration (Next.js 16 default)
    turbopack: {
        // Empty config to allow webpack fallback for file-loader
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/images/',
                    outputPath: 'static/images/',
                }
            }
        });
        return config;
    }
}
