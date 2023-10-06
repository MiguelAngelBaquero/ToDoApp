import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

let paragraph = "";

function TodoProvider({ children }) {
  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage("TODOS_V1", []),
    [searchValue, setSearchValue] = React.useState(""),
    [openModal, setOpenModal] = React.useState(false),
    [openEditModal, setOpenEditModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length,
    totalTodos = todos.length,
    searchedTodos = todos.filter((todos) =>
      todos.text.toLowerCase().includes(searchValue.toLowerCase())
    );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const editTodo = (text, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (
      !newTodos.some(
        (todo) =>
          todo.text.toLowerCase().trim() === newText.toLowerCase().trim()
      )
    ) {
      newTodos[todoIndex].text = newText;
      saveTodos(newTodos);
    } else {
      alert("Task is already on the list");
    }
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    if (
      !newTodos.some(
        (todo) => todo.text.toLowerCase().trim() === text.toLowerCase().trim()
      )
    ) {
      newTodos.push({ text, completed: false });
      saveTodos(newTodos);
    } else {
      alert("Task is already on the list");
    }
  };

  const setText = (text) => (paragraph = text),
    getText = () => paragraph;

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        editTodo,
        addTodo,
        setText,
        getText,
        loading,
        error,
        openModal,
        setOpenModal,
        openEditModal,
        setOpenEditModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
