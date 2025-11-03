import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../useUser";
import "./NavBar.css";

export default function NavBar() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {isLoading ? (
          "Loading..."
        ) : user ? (
          <>Logged in as {user.email}</>
        ) : null}
      </div>

      <ul className="navbar-right">
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/articles" className="navbar-link">
            Articles
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
          ) : (
            <button onClick={() => navigate("/login")}>Sign In</button>
          )}
        </li>
      </ul>
    </nav>
  );
}
