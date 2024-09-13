import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist', // 自定义输出目录 默认.next

    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/login',
    //             permanent: true, // false：临时重定向、true：永久重定向
    //         },
    //     ]
    // },
};

export default nextConfig;
