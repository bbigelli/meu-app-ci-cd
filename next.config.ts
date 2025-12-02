/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desative lint durante desenvolvimento
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Não use output: 'export' em desenvolvimento
  // output: 'export', // APENAS para produção
}

module.exports = nextConfig