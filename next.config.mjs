/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['example.com'],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
    },
  };
  
  export default nextConfig;
  
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
