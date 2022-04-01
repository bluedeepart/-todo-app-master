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

    const getItems = setTimeout(() => {
      let tasks;
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        setAllTasksData(tasks);
      }
      return tasks;
    }, 500);

    return () => {
      clearTimeout(getItems);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* add task */
  const addNewTaskHandler = (newTask) => {
    localStorage.setItem("tasks", JSON.stringify([newTask, ...allTasksData]));
    setAllTasksData([newTask, ...allTasksData]);
  };

  /* delete task */
  const deleteTaskHandler = (id) => {
    if (window.confirm("Are your sure you want to delete task?")) {
      const deletedTask = allTasksData.filter((task) => task.id !== id);
      console.log(allTasksData.length);
      if(allTasksData.length === 1){
        localStorage.removeItem("tasks");
      }else{
        localStorage.setItem("tasks", JSON.stringify([deletedTask]));
      }
      setAllTasksData(deletedTask);
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

    const complatedTasks = allTasksData.map((task) =>
      task.id.toString() === updateTask.id.toString()
        ? { ...task, ...updateTask }
        : task
    );

    localStorage.setItem("tasks", JSON.stringify(complatedTasks));
    setAllTasksData(complatedTasks);
  };

  /* remove completed task */
  const removeCompletedTask = () => {
    if (window.confirm("Are your sure you want to delete all tasks?")) {
      const taskToRemove = allTasksData.filter(
        (task) => task.completed === false
      );
      localStorage.removeItem("tasks", JSON.stringify(taskToRemove));
      setAllTasksData(taskToRemove);
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
