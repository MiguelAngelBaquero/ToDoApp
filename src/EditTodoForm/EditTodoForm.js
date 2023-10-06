import React from "react";
import "./EditTodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function EditTodoForm() {
  const { setOpenEditModal, editTodo, getText } = React.useContext(TodoContext);
  let tempText = getText();
  const [newTodoValue, setNewTodoValue] = React.useState(tempText);

  const onSubmit = (event) => {
    event.preventDefault();
    editTodo(tempText, newTodoValue);
    setOpenEditModal(false);
  };

  const onCancel = () => setOpenEditModal(false);

  const onChange = (event) => setNewTodoValue(event.target.value);

  return (
    <form onSubmit={onSubmit}>
      <label>Edit your ToDo</label>
      <textarea
        // placeholder={tempText}
        value={newTodoValue}
        // value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Accept
        </button>
      </div>
    </form>
  );
}

export { EditTodoForm };
