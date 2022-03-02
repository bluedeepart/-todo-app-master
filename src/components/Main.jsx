import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ActiveTasks from "./ActiveTasks";
import AddTaskFOrm from "./AddTaskForm";
import AllTask from "./AllTask";
import CompletedTasks from "./CompletedTasks";
import TaskContext from "../context/TaskContext";

const Main = () => {
  const taskCtx = useContext(TaskContext);
  const { location } = taskCtx;


  return (
    <main>
      {location.pathname.indexOf("completed") < 0 && <AddTaskFOrm />}
      <Routes>
          <Route path="/todo-app-master/">
            <Route index element={<AllTask />} />
            <Route path="active" element={<ActiveTasks />} />
            <Route path="completed" element={<CompletedTasks />} />
          </Route>
        </Routes>
    </main>
  );
};

export default Main;
