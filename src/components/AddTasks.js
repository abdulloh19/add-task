import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./reducers/addTodo";

const AddTasks = ({ addTodo }) => {
  const [inputVal, setInputVal] = useState("");

  function addTask1() {
    if (inputVal) {
      addTodo(inputVal);
      setInputVal("");
    }
  }

  return (
    <div className="row">
      <div className="col-md-10">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)} 
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-2">
        <button className="btn btn-success" onClick={addTask1}>
          Add
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addTodo })(AddTasks);
