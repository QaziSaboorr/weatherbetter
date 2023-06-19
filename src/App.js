import Main from "./components/Main";
import LoadingBar from "react-top-loading-bar";
import Navbar2 from "./components/Navbar2";
import React, { useState } from "react";
import { useEffect } from "react";
import Alert from "./components/Alert";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
function App() {
  const [city, UpdateCity] = useState("Calgary");
  const [units, UpdateUnits] = useState("metric");
  const [info, updateInfo] = useState({});
  const [ready, readyInfo] = useState(false);
  const [alert, updateAlert] = useState(false);
  const [progress, setState] = useState(0);
  const [time, updateTime] = useState("");
  const setProgress = (progress) => {
    setState(progress);
  };
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, []);

  const fetchWeather = async () => {
    try {
      readyInfo(false);
      setProgress(0);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed5f1f55c52f0d9ef61f594d6b513de3&units=${units}&lang=en`;
      setProgress(25);
      let info = await fetch(url);
      setProgress(50);
      let jsonInfo = await info.json();
      updateInfo(jsonInfo);
      readyInfo(true);
      updateAlert(false);
      setProgress(100);

      if (jsonInfo["message"] === "city not found") {
        console.log("Going in catch block");
        readyInfo(false);
        updateAlert(true);
        setProgress(100);
        throw Error("could not find city");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar2
          city={city}
          fetch={fetchWeather}
          UpdateCity={UpdateCity}
          updateUnits={UpdateUnits}
        />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />
        <Alert Alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Main weatherinfo={info} ready={ready} city={city} />}
          />

          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// dark mood

//units

// rest of the fields
