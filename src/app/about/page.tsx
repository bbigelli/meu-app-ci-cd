import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Projeto</h1>
          
          <div className="bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
            <p className="text-gray-700 mb-4">
              Este projeto tem como objetivo demonstrar uma implementação prática de 
              Integração Contínua (CI) e Entrega Contínua (CD) utilizando Next.js e GitHub Actions.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">🛠 Tecnologias Utilizadas</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Next.js 14</strong> - Framework React com App Router</li>
              <li><strong>TypeScript</strong> - Tipagem estática</li>
              <li><strong>Tailwind CSS</strong> - Estilização</li>
              <li><strong>Jest & Testing Library</strong> - Testes unitários</li>
              <li><strong>ESLint</strong> - Análise estática de código</li>
              <li><strong>GitHub Actions</strong> - Automação CI/CD</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">⚙️ Fluxo da Pipeline</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">1. Validação de Código</h3>
                <p className="text-gray-600">ESLint verifica a qualidade do código</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold">2. Testes Automatizados</h3>
                <p className="text-gray-600">Jest executa testes unitários</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold">3. Build da Aplicação</h3>
                <p className="text-gray-600">Next.js gera build de produção</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold">4. Deploy Automático</h3>
                <p className="text-gray-600">Publicação no GitHub Pages/Vercel</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-8">📚 Aprendizados</h2>
            <p className="text-gray-700">
              Através deste projeto, é possível entender como configurar uma pipeline 
              completa de CI/CD que garante qualidade de código através de validações 
              automáticas e entrega contínua da aplicação.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}