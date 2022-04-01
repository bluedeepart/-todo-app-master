import { NavLink } from "react-router-dom";

const TodoTabs = () => {
  return (
    <ul className="tab-list">
      <li className="tab-list-item">
        <NavLink to="/">All</NavLink>
      </li>
      <li className="tab-list-item">
        <NavLink to="active">Active</NavLink>
      </li>
      <li className="tab-list-item">
        <NavLink to="completed">Completed</NavLink>
      </li>
    </ul>
  );
};

export default TodoTabs;
