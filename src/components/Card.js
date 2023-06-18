import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body text-center">
          <h3>{props.header}</h3>
          <h4 className="my-5">{props.info}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
