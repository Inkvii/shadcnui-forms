import { NextConfig } from "next"
import { default as bundleAnalyzer } from "@next/bundle-analyzer"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
]

module.exports = {
  ...withBundleAnalyzer({}),
  ...nextConfig,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: `/:path*`,
        headers: securityHeaders,
      },
    ]
  },
}
