import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import React from "react";

export default function Navbar() {
  const { logout } = useLogout();

  const { user } = useAuthContext();

  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title}>
          <Link to="/">Money Manager</Link>
        </li>

        {user ? (
          <React.Fragment>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign-up</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
}
