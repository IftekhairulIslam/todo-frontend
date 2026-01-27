import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No todos yet. Add one to get started!</p>
      </div>
    )
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div>
      <div className="mb-4 flex justify-between items-center text-sm text-gray-600">
        <span>
          {completedCount} of {totalCount} completed
        </span>
        {completedCount > 0 && (
          <span className="text-indigo-600 font-medium">
            {Math.round((completedCount / totalCount) * 100)}% done
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
