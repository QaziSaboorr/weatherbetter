import React from "react";

function Navbar(props) {
  const updateValue = (event) => {
    props.UpdateCity(event.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/#">
        Weather Feather
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              About
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Enter a city name"
            aria-label="Search"
            value={props.city}
            onChange={(event) => updateValue(event)}
          />
          <button
            className="btn btn-outline-warning my-2 my-sm-0"
            type="submit"
            onClick={props.fetch}
          >
            Search a city
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
