'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold mb-4">Contador Interativo</h3>
      <p className="text-4xl font-bold text-primary mb-6">{count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          disabled={count <= 0}
        >
          Decrementar
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Resetar
        </button>
      </div>
    </div>
  )
}