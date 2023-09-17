import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
