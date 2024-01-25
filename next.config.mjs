/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
            },
            {   
                protocol: 'https',
                hostname: 'img.clerk.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
