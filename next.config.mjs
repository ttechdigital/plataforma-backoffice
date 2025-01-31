import path from 'path';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "Plataforma",  // Nome do microfrontend consumidor
        remotes: {
            Relacionamento: "Relacionamento@http://localhost:3001/_next/static/chunks/remoteEntry.js", // Corrigido para _next/static/chunks/
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
