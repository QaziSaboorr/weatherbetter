import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Statsbox from "./components/Statsbox";
import React, { useState } from "react";

function App() {
  const [city, UpdateCity] = useState("Calgary");

  const fetch = async () => {
    console.log(city);
  };
  return (
    <>
      <Navbar city={city} fetch={fetch} UpdateCity={UpdateCity} />

      <Main />

      <Statsbox />
    </>
  );
}

export default App;
