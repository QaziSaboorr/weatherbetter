import React from "react";
import Card from "./Card";

function Statsbox() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col my-3">
          <Card />
        </div>
        <div className="col my-3">
          <Card />
        </div>
        <div className="col my-3">
          <Card />
        </div>
        <div className="col my-3">
          <Card />
        </div>
        <div className="col my-3">
          <Card />
        </div>
        <div className="col my-3">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Statsbox;
