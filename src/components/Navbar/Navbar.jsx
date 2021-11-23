import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

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

        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
