import { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import EmptyTaskState from "./EmptyTaskState";
import LoadingState from "./LoadingState";
import TaskItem from "./TaskItem";
import getStarted from './assets/get-started.png';

const ActiveTasks = () => {
  const [activeTasks, setActiveTasks] = useState();
  const [loading, setLoading] = useState(true);
  const taskCtx = useContext(TaskContext);
  const { allTasksData, location } = taskCtx;

  useEffect(() => {
    setTimeout(() => {
      if (location.pathname.indexOf("active") > 0) {
        setActiveTasks(allTasksData.filter((task) => task.completed === false));
      }
      setLoading(false);
    }, 500);
  }, [location.pathname, allTasksData]);

  if (loading) {
    return <LoadingState />;
  } else if(activeTasks.length > 0) {
    return (
      <ul className="task-list">
        {activeTasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    );
  }else{
    return (
      <EmptyTaskState>
        <p>0 Active task(s)</p>
        <img src={getStarted} alt="get started" className="get-started-img" />
        <p className="credit"><small><a href="https://storyset.com/app" target="_blank" rel="noopener noreferrer">App illustrations by Storyset</a></small></p>
      </EmptyTaskState>
    );
  }
};

export default ActiveTasks;
