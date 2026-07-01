import type { NextConfig } from "next";

// Servido na raiz do domínio próprio publiciart.com.br (GitHub Pages + CNAME).
const nextConfig: NextConfig = {
  output: "export", // gera site estático (pasta out/) para o GitHub Pages
  images: { unoptimized: true }, // next/image sem servidor de otimização
  trailingSlash: true,
};

export default nextConfig;
