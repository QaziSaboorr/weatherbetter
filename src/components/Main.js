import React from "react";

function Main(props) {
  let currentTemp = "loading";

  console.log("ok");
  if (props.ready === true) {
    currentTemp = props.weatherinfo["main"]["temp"];
  }

  return (
    <>
      <div>
        <div className="card my-3">
          <div className="card-body text-center">
            <h1>Current Temperature</h1>
            <h2>{currentTemp}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
