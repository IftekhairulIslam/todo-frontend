import { useState, useEffect } from "react";
import type { Todo } from "../types/todo";
import { getTodos, saveTodos } from "../utils/localStorage";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const initialTodos = getTodos() || [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo,
      ),
    );
  };

  return (
    <>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </>
  );
}
