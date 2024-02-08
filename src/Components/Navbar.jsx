import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-md bg-danger">
        <div className="container-fluid">

          <Link to="/articles" className="navbar-brand">
            <span className="badge bg-white text-danger fs-4">NC News</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" className="nav-link">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
              {user && user.username && (
                <li className="nav-item">
                  <p className="nav-link">Logged in as {user.username}{" "} <img src={user.avatar_url} alt={`Avatar of ${user.username}`} style={{width:30, height:20}} /></p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
