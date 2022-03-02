import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import allTasks from "../data/tasks";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [allTasksData, setAllTasksData] = useState([]);
  const [isCompletedTask, setIsCompletedTask] = useState(false);
  const location = useLocation();

  useEffect(() => {
    allTasksData.map(
      (task) => task.completed && setIsCompletedTask(!isCompletedTask)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* add task */
  const addNewTaskHandler = (newTask) => {
    setAllTasksData([newTask, ...allTasksData]);
  };

  /* delete task */
  const deleteTaskHandler = (id) => {
    if (window.confirm("Are your sure you want to delete task?")) {
      setAllTasksData(allTasksData.filter((task) => task.id !== id));
    }
  };

  /* completed task */
  const completeTaskToggler = (e) => {
    setIsCompletedTask(!isCompletedTask);
    const updateTask = {
      id: e.target.id,
      title: e.target.nextElementSibling.innerHTML,
      completed: e.target.checked,
    };

    setAllTasksData(
      allTasksData.map((task) =>
        task.id.toString() === updateTask.id.toString()
          ? { ...task, ...updateTask }
          : task
      )
    );
  };

  /* remove completed task */
  const removeCompletedTask = () => {
    if (window.confirm("Are your sure you want to delete all tasks?")) {
      setAllTasksData(allTasksData.filter((task) => task.completed === false));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        location,
        allTasksData,
        isCompletedTask,
        addNewTaskHandler,
        deleteTaskHandler,
        completeTaskToggler,
        removeCompletedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
