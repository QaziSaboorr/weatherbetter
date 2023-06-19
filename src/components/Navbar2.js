import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar2(props) {
  const updateValue = (event) => {
    props.UpdateCity(event.target.value);
  };
  let location = useLocation();
  let path = location["pathname"];
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Weather Feather better
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${path === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${path === "/About" ? "active" : ""}`}
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              value={props.city}
              onChange={(event) => updateValue(event)}
            />
          </form>
          <button className="btn btn-primary " onClick={props.fetch}>
            Search City
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
