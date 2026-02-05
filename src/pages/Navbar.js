import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // (later we can clear token/session here)
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <span className="navbar-brand">🌱 Green Initiative</span>

      <div className="collapse navbar-collapse show">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/initiatives">Initiatives</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/my-contributions">My Contributions</Link>
          </li>

        </ul>

        <button 
          className="btn btn-outline-light"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
