import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  if (totalTodos === 0 && completedTodos === 0) {
    return <h1 className="TodoCounter">You haven't created any task yet</h1>;
  } else if (
    totalTodos > 0 &&
    completedTodos > 0 &&
    totalTodos === completedTodos
  ) {
    return (
      <h1 className="TodoCounter">
        Congratulations! You have completed all of your tasks!
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        You have completed <span> {completedTodos} </span> out of
        <span> {totalTodos} </span> tasks
      </h1>
    );
  }
}

export { TodoCounter };
