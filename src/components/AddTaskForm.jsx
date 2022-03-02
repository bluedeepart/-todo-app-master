import { useContext, useState } from "react";
import Button from "../components/shared/Button";
import TaskContext from "../context/TaskContext";
import classes from "../components/shared/Input.module.css";

const AddTaskFOrm = () => {
  const [inputValue, setInputValue] = useState("");
  const taskCtx = useContext(TaskContext);
  const { addNewTaskHandler, allTasksData } = taskCtx;

  const onChangeHanlder = (e) => {
    setInputValue(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (inputValue === "" || inputValue.trim().length === 0) {
      alert("Please enter your task");
    } else {
      const newTask = {
        id: allTasksData.length,
        title: inputValue,
        completed: false,
      };
      addNewTaskHandler(newTask);
    }
    setInputValue("");
  };

  return (
    <form className="add-task-form" onSubmit={addTaskHandler}>
      <div className={`${classes["input-group"]} ${classes.fullWidth}`}>
        <input
          type="text"
          placeholder="add details"
          className={classes["input-control"]}
          value={inputValue}
          onChange={onChangeHanlder}
        />
      </div>
      <Button color="primary" size="lg" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddTaskFOrm;
