import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import { MdDeleteOutline } from "react-icons/md";

const TaskItem = (task) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { pathname } = useLocation();
  const tastCtx = useContext(TaskContext);
  const { deleteTaskHandler, completeTaskToggler, isCompletedTask } = tastCtx;

  useEffect(() => {
    if (task.task.completed) {
      setIsCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const completeTask = (e) => {
    completeTaskToggler(e);
    setIsCompleted(!isCompletedTask);
    console.log(!isCompletedTask);
  };

  return (
    <li>
      <div className="task-item">
        <input
          type="checkbox"
          id={task.task.id}
          onChange={completeTask}
          data-check={isCompleted}
          checked={isCompleted}
        />
        <label htmlFor={task.task.id}>{task.task.title}</label>
      </div>
      {pathname.indexOf("completed") > 0 && (
        <span
          className="delete-icon"
          onClick={() => deleteTaskHandler(task.task.id)}
        >
          <MdDeleteOutline />
        </span>
      )}
    </li>
  );
};

export default TaskItem;
