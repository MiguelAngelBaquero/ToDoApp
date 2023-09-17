import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { TodosLoading } from "../TodosLoading/TodosLoading.js";
import { TodosError } from "../TodosError/TodosError.js";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
import { Modal } from "../Modal/modal.js";
import { TodoContext } from "../TodoContext/TodoContext.js";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && <Modal>La funcionalidad de crear Tasks</Modal>}
      <CreateTodoButton />
    </>
  );
}

export { AppUI };