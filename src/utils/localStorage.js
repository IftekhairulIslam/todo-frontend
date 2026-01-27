const STORAGE_KEY = 'todo-app-todos'

export const getTodos = () => {
  try {
    const todosJson = localStorage.getItem(STORAGE_KEY)
    return todosJson ? JSON.parse(todosJson) : []
  } catch (error) {
    console.error('Error loading todos from localStorage:', error)
    return []
  }
}

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (error) {
    console.error('Error saving todos to localStorage:', error)
  }
}
