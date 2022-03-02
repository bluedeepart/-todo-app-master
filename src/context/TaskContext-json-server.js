import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import allTasks from "../data/tasks";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [allTasksData, setAllTasksData] = useState(allTasks);
  const location = useLocation();

  useEffect(() => {
    fetchTasks();
  }, []);

  /* fetch tasks */
  const fetchTasks = async () => {
    const res = await fetch(`/tasks?_sort=id&_order=desc`);
    const data = await res.json();
    setAllTasksData(data);
  };

  /* add task */
  const addNewHandler = async (newTask) => {
    const res = await fetch(`/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setAllTasksData([data, ...allTasksData]);
  };

  /* delete task */
  const deleteTaskHandler = async (id) => {
    if (window.confirm("Are your sure you want to delete task?")) {
      await fetch(`/tasks/${id}`, {
        method: "DELETE",
      });

      setAllTasksData(allTasksData.filter((task) => task.id !== id));
    }
  };

  /* completed task */
  const completeTaskToggler = async (id, updatedItem) => {
    const res = await fetch(`/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await res.json();

    setAllTasksData(
      allTasksData.map((task) => (task.id === id ? { ...task, ...data } : task))
    );
  };

  /* remove completed task */
  const removeCompletedTask = async () => {
    if (window.confirm("Are your sure you want to delete all tasks?")) {
      await fetch(`/tasks?_completed=true`, {
        method: "DELETE",
      });
      setAllTasksData(allTasksData.filter((task) => task.completed === false));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        location,
        allTasksData,
        addNewHandler,
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
