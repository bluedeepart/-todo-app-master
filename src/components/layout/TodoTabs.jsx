import { NavLink } from "react-router-dom";

const TodoTabs = () => {
  return (
    <ul className="tab-list">
      <li className="tab-list-item">
        <NavLink to="/todo-app-master/all">All</NavLink>
      </li>
      <li className="tab-list-item">
        <NavLink to="/todo-app-master/active">Active</NavLink>
      </li>
      <li className="tab-list-item">
        <NavLink to="/todo-app-master/completed">Completed</NavLink>
      </li>
    </ul>
  );
};

export default TodoTabs;
