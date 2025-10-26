import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function NavBar() {
  // const isLoggedIn = false;
  // // const email = "bill@bob.com";
  const isLoggedIn = true;
  const email = "bill@bob.com";

  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* anchor tags reload the entire page whilst Link just swaps the page efficiently behind the scenes for good SPA experience */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        {isLoggedIn && (
          <li style={{ color: "white" }}>
            Logged in as {email}
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button onClick={() => signOut(getAuth())}>Log out</button>
          ) : (
            <button onClick={() => navigate("/login")}>Log in</button>
          )}
        </li>
      </ul>
    </nav>
  );
}
