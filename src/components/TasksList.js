import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TasksList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="row">
      <div className="col-md-12">
        {todos.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default connect(({ todos }) => ({ todos: todos }), null)(TasksList);
