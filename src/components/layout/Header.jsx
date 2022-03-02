import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1><Link to='/todo-app-master'>#todo</Link></h1>
    </header>
  );
};

export default Header;
