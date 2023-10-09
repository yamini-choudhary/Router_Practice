import { Link, NavLink } from "react-router-dom";
import "./styles.css";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/user">
              User
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
