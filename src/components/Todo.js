import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "./reducers/addTodo";

const Todo = ({ item, toggleTodo }) => {
  return (
    <div key={item.id} className="row">
      <div className="col-md-2">
        <input
          id={"check/" + item.id}
          type="checkbox"
          style={{ transform: "scale(1.5)", margin: "10px" }}
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
        />
      </div>
      <div className="col-md-10">
        <label style={{ fontSize: "20px" }} htmlFor={"check/" + item.id}>
          {item.title}
        </label>
      </div>
    </div>
  );
};

export default connect(null, { toggleTodo })(Todo);
