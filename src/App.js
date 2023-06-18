import Main from "./components/Main";
import Statsbox from "./components/Statsbox";
import Navbar2 from "./components/Navbar2";
import React, { useState } from "react";

function App() {
  const [city, UpdateCity] = useState("Calgary");

  const fetch = async () => {
    console.log(city);
  };
  return (
    <>
      <Navbar2 city={city} fetch={fetch} UpdateCity={UpdateCity} />

      <Main />

      <Statsbox />
    </>
  );
}

export default App;
