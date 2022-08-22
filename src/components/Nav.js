import { Link } from "react-router-dom";
import Timer from "./Timer";

const Nav = ({ timerOn }) => {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Timer timerOn={timerOn} />
        </li>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/high-score">
          <li>HighScore</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
