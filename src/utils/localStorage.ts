import type { Todo } from "../types/todo";

const STORAGE_KEY = "todo-app-todos";

export const getTodos = (): Todo[] => {
  try {
    const todosJson = localStorage.getItem(STORAGE_KEY);
    return todosJson ? (JSON.parse(todosJson) as Todo[]) : [];
  } catch (error) {
    console.error("Error loading todos from localStorage:", error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};
