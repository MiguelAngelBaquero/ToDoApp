import React from "react";
import "./TodoItem.css";
import { CompleteIcon, UnchekedIcon, DeleteIcon } from "../Icons/Icons.js";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoItem(props) {
  const { setOpenEditModal, openEditModal, setText } =
    React.useContext(TodoContext);
  let iconName = "";
  props.completed ? (iconName = "checked") : (iconName = "unchecked");
  const icon = {
    unchecked: <UnchekedIcon onClick={props.onComplete} />,
    checked: <CompleteIcon onClick={props.onComplete} />,
  };
  return (
    <li className="TodoItem">
      {icon[iconName]}
      <p
        onClick={() => {
          setOpenEditModal(!openEditModal);
          setText(props.text);
        }}
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      <DeleteIcon onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
