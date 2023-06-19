import React from "react";
import Statsbox from "./Statsbox.js";

function Main(props) {
  let currentTemp = "loading";
  let weatherObj = {};
  if (props.ready === true) {
    currentTemp = props.weatherinfo["main"]["temp"];
    weatherObj = props.weatherinfo["weather"];
  }
  return (
    props.ready && (
      <>
        <div>
          <div className="card my-3">
            <div className="card-body text-center">
              <h1>Current Temperature in {props.city} </h1>
              <img
                src={`https://openweathermap.org/img/wn/${weatherObj[0]["icon"]}@2x.png`}
                alt="should be telling state"
              />
              <h3> {weatherObj[0]["description"]} </h3>
              <h2>{currentTemp} °C</h2>
            </div>
          </div>
        </div>
        <Statsbox weatherinfo={props.weatherinfo} ready={props.ready} />
      </>
    )
  );
}

export default Main;
