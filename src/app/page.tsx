import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Counter from '@/components/Counter'
import TodoList from '@/components/TodoList'
import { FaGithub, FaCode, FaRocket } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🚀 Demonstração de CI/CD
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aplicação Next.js com pipeline automatizada usando GitHub Actions
          </p>
        </section>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FaGithub className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub Actions</h3>
            <p className="text-gray-600">
              Pipeline automatizada com testes, lint e deploy
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FaCode className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Next.js 14</h3>
            <p className="text-gray-600">
              Framework React com App Router e TypeScript
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FaRocket className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deploy Automático</h3>
            <p className="text-gray-600">
              Publicação automática no GitHub Pages ou Vercel
            </p>
          </div>
        </div>

        {/* Interactive Components */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Counter />
          <TodoList />
        </div>

        {/* CI/CD Status */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4">Status da Pipeline</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
              <span>ESLint - Configurado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
              <span>Jest Tests - Configurado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
              <span>Build Automático - Configurado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
              <span>Deploy Automático - Configurar Secrets</span>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4">📋 Como Configurar o CI/CD</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Push do código para o GitHub</li>
            <li>Configurar Secrets no repositório</li>
            <li>A cada push na main, a pipeline executa automaticamente</li>
            <li>Os testes e validações rodam</li>
            <li>Se tudo passar, o deploy é realizado</li>
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  )
}