import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    City: "Delhi",
    Feels_Like: 42.34,
    Humidity: 17,
    Maxmiun_Temperature: 43.05,
    Minimun_Temperature: 42.84,
    Temperature: 42.84,
    Weather: "broken clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Only 1000 searches can be successful.
      </Alert>
      <h1>Weather app By Aadit </h1>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />

      <marquee behavior="scroll" direction="left">
        Applicable only for in cities India (Small villages may not be contained
        in API which will gives error)
      </marquee>
    </div>
  );
}
