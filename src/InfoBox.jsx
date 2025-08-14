import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import hotImage from "./assets/HOT.jpg";
import coldImage from "./assets/COLD.jpg";
import rainyImage from "./assets/RAINY.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INITIAL_IMG_URL =
    "https://unsplash.com/photos/palm-trees-covered-with-fog-TFyi0QOx08c";

  const HOT_URL = hotImage;
  const COLD_URL = coldImage;
  const RAINY_URL = rainyImage;

  const getImageUrl = () => {
    if (info.Humidity > 80) {
      return RAINY_URL;
    } else if (info.Temperature > 15) {
      return HOT_URL;
    } else {
      return COLD_URL;
    }
  };

  return (
    <div className="InfoBox">
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImageUrl() || INITIAL_IMG_URL}
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.City}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {info.Humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.Temperature ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <div>Temperature = {info.Temperature}&deg;C</div>
              <div>Minimum Temperature = {info.Minimum_Temperature}&deg;C</div>
              <div>Maximum Temperature = {info.Maximum_Temperature}&deg;C</div>
              <div>Humidity = {info.Humidity}</div>
              <div>
                Weather can be described as {info.Weather} and it feels like{" "}
                {info.Feels_Like}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
