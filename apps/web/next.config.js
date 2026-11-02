/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@bakery/supabase'],
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
