import React from "react";
import Card from "./Card";

function Statsbox(props) {
  let minTemp = "loading";
  let maxTemp = "loading";
  let feelsLike = "loading";
  console.log("ok");
  if (props.ready === true) {
    minTemp = props.weatherinfo["main"]["temp_min"];
    maxTemp = props.weatherinfo["main"]["temp_max"];
    feelsLike = props.weatherinfo["main"]["feels_like"];
  }

  return (
    <div className="container ">
      <div className="row ">
        <div className="col my-3 ">
          <Card header={"Minimum Temperature"} info={minTemp} />
        </div>
        <div className="col my-3 ">
          <Card header={"Feels Like"} info={feelsLike} />
        </div>
      </div>
      <div className="row ">
        <div className="col my-3 ">
          <Card header={"Maximum Temperature"} info={maxTemp} />
        </div>
        <div className="col my-3 ">
          <Card header={"Humidity"} info={"info"} />
        </div>
      </div>
      <div className="row ">
        <div className="col my-3 ">
          <Card header={"WindSpeed"} info={"info"} />
        </div>
        <div className="col my-3 ">
          <Card header={"Local Time"} info={"info"} />
        </div>
      </div>
    </div>
  );
}

export default Statsbox;
