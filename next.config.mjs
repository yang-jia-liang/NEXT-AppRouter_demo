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

    /**
     * logging 目前，仅使用于 fetch API 的打印
     *
     * logging: false,                       - 禁用开发模式下的打印
     * logging.fetches.hmrRefreshes: true    - fetch请求从 Server Components HMR cache中使用缓存时，默认不会打印信息，可以设置开启打印
     * */
    // logging: {
    //     fetches: {
    //         fullUrl: true,
    //     },
    // },
};

export default nextConfig;
