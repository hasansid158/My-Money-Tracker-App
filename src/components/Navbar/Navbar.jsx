import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title}>
          <Link to="/">Money-Manager</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign-up</Link>
        </li>
      </ul>
    </nav>
  );
}
