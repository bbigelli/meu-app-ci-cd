'use client'

import { useState } from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Configurar CI/CD', completed: true },
    { id: 2, text: 'Escrever testes', completed: false },
    { id: 3, text: 'Deploy na Vercel', completed: false },
  ])
  
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    
    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    }
    
    setTodos([...todos, todo])
    setNewTodo('')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Lista de Tarefas</h3>
      
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nova tarefa..."
          className="flex-grow p-2 border rounded-l"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="bg-secondary text-white px-4 py-2 rounded-r hover:bg-green-600 transition"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-3 rounded ${
              todo.completed ? 'bg-green-50' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center ${
                  todo.completed
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300'
                }`}
              >
                {todo.completed && <FaCheck size={12} />}
              </button>
              <span
                className={
                  todo.completed ? 'line-through text-gray-500' : ''
                }
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-sm text-gray-600">
        Total: {todos.length} | Concluídas: {todos.filter(t => t.completed).length}
      </div>
    </div>
  )
}