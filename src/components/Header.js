import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon="list-alt" className="main-logo" />
        <span>Todo List</span>
      </div>
    </header>
  );
};

export default Header;
