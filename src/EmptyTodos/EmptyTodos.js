import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function EmptyTodos() {
  const { totalTodos } = React.useContext(TodoContext);
  if (totalTodos > 0) {
    return (
      <div>
        <p>No tasks found</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Create your first task!</p>
      </div>
    );
  }
}

export { EmptyTodos };
