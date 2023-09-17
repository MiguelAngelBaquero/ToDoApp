import "./TodoItem.css";
import { CompleteIcon, UnchekedIcon, DeleteIcon } from "../Icons/Icons.js";

function TodoItem(props) {
  let iconName = "";
  props.completed ? (iconName = "checked") : (iconName = "unchecked");
  const icon = {
    unchecked: <UnchekedIcon onClick={props.onComplete} />,
    checked: <CompleteIcon onClick={props.onComplete} />,
  };
  return (
    <li className="TodoItem">
      {icon[iconName]}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
