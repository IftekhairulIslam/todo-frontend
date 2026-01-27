import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { getTodos, saveTodos } from './utils/localStorage'

function App() {
  const [todos, setTodos] = useState([])

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = getTodos()
    setTodos(savedTodos)
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            📝 Todo App
          </h1>
          
          <AddTodo onAdd={addTodo} />
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App
