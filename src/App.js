import React from "react";
import AddTasks from "./components/AddTasks";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <div className="container">
      <div className="row offset-3 my-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <AddTasks />
            </div>
            <div className="card-body">
              <TasksList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
