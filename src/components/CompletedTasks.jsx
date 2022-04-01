import { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import TaskItem from "./TaskItem";
import Button from "./shared/Button";
import { MdDeleteOutline } from "react-icons/md";
import EmptyTaskState from "./EmptyTaskState";
import LoadingState from "./LoadingState";
import completed from "./assets/task-completed.png";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState();
  const [loading, setLoading] = useState(true);
  const taskCtx = useContext(TaskContext);
  const { allTasksData, location, removeCompletedTask } = taskCtx;

  useEffect(() => {
    const cmpTask = setTimeout(() => {
      if (location.pathname.indexOf("completed") > 0) {
        setCompletedTasks(allTasksData.filter((task) => task.completed));
      }
      setLoading(false);
    }, 400);

    return () => {
      clearTimeout(cmpTask);
    };
  }, [location.pathname, allTasksData]);

  if (loading) {
    return <LoadingState />;
  } else {
    return (
      <>
        {completedTasks.length > 0 ? (
          <>
            <ul className="task-list completed-task-list">
              {completedTasks.map((task, index) => (
                <TaskItem key={index} task={task} />
              ))}
            </ul>

            <div style={{ textAlign: "right" }}>
              <Button color="danger" onClick={removeCompletedTask}>
                <MdDeleteOutline /> delete all
              </Button>
            </div>
          </>
        ) : (
          <EmptyTaskState>
            <p style={{ marginTop: "50px" }}>0 task completed</p>
            <img
              src={completed}
              alt="get started"
              className="get-started-img"
            />
            <p className="credit">
              <small>
                <a
                  href="https://storyset.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App illustrations by Storyset
                </a>
              </small>
            </p>
          </EmptyTaskState>
        )}
      </>
    );
  }
};

export default CompletedTasks;
