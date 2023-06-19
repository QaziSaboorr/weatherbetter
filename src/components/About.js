import React from "react";

function About() {
  let style = {
    marignTop: "11rem",
  };
  return (
    <div
      className="container d-flex-coloumn justify-cotent-center align-items-center my-5"
      style={style}
    >
      <h1>About This Application</h1>
      <p className="my-3">
        Weather Feather combines the power of WeatherAPI's data with the
        versatility and user-friendly components of React and Bootstrap,
        providing an intuitive and visually appealing weather experience. With
        Weather Feather, users can easily access accurate and up-to-date weather
        information for different locations. By leveraging routing capabilities,
        you enable users to navigate seamlessly between different pages within
        Weather Feather, enhancing the overall user experience. The integration
        of React and Bootstrap ensures that your weather app is responsive and
        mobile-friendly, adapting smoothly to different screen sizes and
        devices. This allows users to access weather updates on the go, whether
        they are using a desktop computer, tablet, or smartphone. By utilizing
        WeatherAPI, Weather Feather can display a variety of weather details
        such as temperature, humidity, wind speed, and state supported by a
        picture for the selected location. Users can stay informed about current
        weather conditions and plan their activities accordingly. Overall, your
        weather app provides a user-friendly interface, accurate weather
        information.
      </p>
    </div>
  );
}

export default About;
