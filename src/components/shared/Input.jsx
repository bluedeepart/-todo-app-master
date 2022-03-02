import { useContext } from "react";
import classes from "./Input.module.css";
import TaskContext from './TaskContext';

const Input = () => {
  const taskCtx = useContext(TaskContext);
  const {inputValue, onChangeHanlder} = taskCtx;

  return (
    <div className={`${classes["input-group"]} ${classes.fullWidth}`}>
      <input
        type="text"
        placeholder="add details"
        className={classes["input-control"]}
        value={inputValue}
        onChange={onChangeHanlder}
      />
    </div>
  );
};

export default Input;
