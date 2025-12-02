/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para desenvolvimento - NÃO use output: 'export'
  reactStrictMode: true,
  swcMinify: true,
  
  // Desative verificações durante desenvolvimento
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // NÃO use output: 'export' aqui - será configurado no workflow
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig