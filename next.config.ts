import bundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import { remarkPlugins } from '~/remark/plugins';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: Boolean(process.env.ANALYZE),
});

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    providerImportSource: '@mdx-js/react',
  },
});

const config: NextConfig = {
  basePath: '',
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx', 'mdx'],
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './next-image-loader.js',
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracing: false,
  output: 'export',
  webpack: (config, { dev, isServer, config: nextConfig }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /.svg$/i,
            issuer: /\.mdx$/,
            loader: 'next-image-loader',
            options: {
              isDev: dev,
              compilerType: isServer ? 'server' : 'client',
              basePath: nextConfig.basePath,
              assetPrefix: nextConfig.assetPrefix,
            },
          },
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgoConfig: {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    };
  },
};

export default withBundleAnalyzer(withMDX(config));
