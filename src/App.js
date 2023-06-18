import Main from "./components/Main";
import Statsbox from "./components/Statsbox";
import Navbar2 from "./components/Navbar2";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [city, UpdateCity] = useState("Calgary");
  const [units, UpdateUnits] = useState("metric");
  const [info, updateInfo] = useState({});
  const [ready, readyInfo] = useState(false);
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, []);

  const fetchWeather = async () => {
    readyInfo(false);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed5f1f55c52f0d9ef61f594d6b513de3&units=${units}&lang=en`;
    let info = await fetch(url);
    let jsonInfo = await info.json();
    updateInfo(jsonInfo);
    console.log(jsonInfo);
    readyInfo(true);
  };
  return (
    <>
      <Navbar2
        city={city}
        fetch={fetchWeather}
        UpdateCity={UpdateCity}
        updateUnits={UpdateUnits}
      />

      <Main weatherinfo={info} ready={ready} />

      <Statsbox weatherinfo={info} ready={ready} />
    </>
  );
}

export default App;
