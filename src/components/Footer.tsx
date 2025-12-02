export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg font-semibold">🚀 Aplicação de Demonstração CI/CD</p>
          <p className="mt-2 text-gray-300">
            Este projeto demonstra uma pipeline completa de Integração e Entrega Contínua
          </p>
          <div className="mt-4 space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              GitHub
            </a>
            <span>•</span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              Next.js
            </a>
            <span>•</span>
            <a 
              href="https://docs.github.com/en/actions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              GitHub Actions
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}