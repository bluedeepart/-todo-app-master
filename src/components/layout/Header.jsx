import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1><Link to='/todo-app-master/all'>#todo</Link></h1>
    </header>
  );
};

export default Header;
