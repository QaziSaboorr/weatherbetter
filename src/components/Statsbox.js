import React from "react";
import Card from "./Card";

function Statsbox(props) {
  let minTemp = "loading";
  let maxTemp = "loading";
  let feelsLike = "loading";
  console.log(props.weatherinfo);

  if (props.ready === true) {
    minTemp = props.weatherinfo["main"]["temp_min"];
    maxTemp = props.weatherinfo["main"]["temp_max"];
    feelsLike = props.weatherinfo["main"]["feels_like"];
  }

  return (
    props.ready && (
      <div className="container ">
        <div className="row ">
          <div className="col my-3 ">
            <Card header={"Minimum Temperature"} info={`${minTemp} °C`} />
          </div>
          <div className="col my-3 ">
            <Card header={"Feels Like"} info={`${feelsLike} °C`} />
          </div>
        </div>
        <div className="row ">
          <div className="col my-3 ">
            <Card header={"Maximum Temperature"} info={`${maxTemp} °C`} />
          </div>
          <div className="col my-3 ">
            <Card
              header={"Humidity"}
              info={`${props.weatherinfo["main"]["humidity"]} %`}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col my-3 ">
            <Card
              header={"WindSpeed"}
              info={`${props.weatherinfo["wind"]["speed"]} Km/h`}
            />
          </div>
          <div className="col my-3 ">
            <Card
              header={"Visibility"}
              info={`${props.weatherinfo["visibility"]} Km`}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Statsbox;
