import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskItem from "./TaskItem";
import EmptyTaskState from "./EmptyTaskState";
import getStarted from './assets/get-started.png';

const AllTask = () => {
  const taskCtx = useContext(TaskContext);
  const { allTasksData } = taskCtx;

  if (allTasksData.length > 0) {
    return (
      <ul className="task-list">
        {allTasksData.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    );
  } else {
    return (
      <EmptyTaskState>
        <p>Add first todo task</p>
        <img src={getStarted} alt="get started" className="get-started-img" />
        <p className="credit"><small><a href="https://storyset.com/app" target="_blank" rel="noopener noreferrer">App illustrations by Storyset</a></small></p>
      </EmptyTaskState>
    );
  }
};

export default AllTask;
