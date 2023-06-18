import React from "react";

function Main() {
  const stylewidth = {
    width: "50%",
  };
  const display = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div className="container my-5" style={display}>
        <div className="card mb-3 " style={stylewidth}>
          <div className="card-body">
            <h2 className="card-title text-center">Current Temperature</h2>
            <h4 className="card-title text-center">Temperature</h4>
            <img src="..." className="card-img-top text-center" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
