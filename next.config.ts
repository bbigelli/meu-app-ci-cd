/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de desenvolvimento
  reactStrictMode: true,
  
  // Ignorar erros durante desenvolvimento
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Otimizações
  swcMinify: true,
  compress: true,
  
  // Para desenvolvimento, não use output: 'export'
  // Isso será habilitado apenas no workflow do GitHub Actions
}

module.exports = nextConfig