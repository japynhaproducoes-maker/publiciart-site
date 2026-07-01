import type { NextConfig } from "next";

// Em produção o site é servido em https://<user>.github.io/publiciart-site
// (subpasta). Ao migrar para publiciart.com.br na raiz, remova o basePath.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // gera site estático (pasta out/) para o GitHub Pages
  images: { unoptimized: true }, // next/image sem servidor de otimização
  basePath: isProd ? "/publiciart-site" : "",
  trailingSlash: true,
};

export default nextConfig;
