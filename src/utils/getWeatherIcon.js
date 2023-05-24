import { 
    WiDaySunny, 
    WiCloud, 
    WiRain, 
    WiDayCloudyHigh,
    WiCloudy,
    WiDayCloudy,
    WiDaySunnyOvercast,
    WiDayShowers,
    WiDayHaze,
    WiStars
  } from "react-icons/wi";

  const getWeatherIcon = (weatherText) => {
    switch (weatherText) {
      case "Sunny":
        return <WiDaySunny style={{ fontSize: '2em' }} />;
      case "Cloudy":
        return <WiCloud style={{ fontSize: '2em' }} />;
      case "Rainy":
        return <WiRain style={{ fontSize: '2em' }} />;
      case "Overcast":
        return <WiDayCloudy style={{ fontSize: '2em' }} />;
      case "Mostly cloudy":
        return <WiCloudy style={{ fontSize: '2em' }} />;
      case "Light rain":
        return <WiDayShowers style={{ fontSize: '2em' }} />;
      case "Clouds and sun":
        return <WiDayCloudyHigh style={{ fontSize: '2em' }} />;
      case "Clear":
        return <WiStars style={{ fontSize: '2em' }} />;
      case "Mostly sunny":
        return <WiDaySunny style={{ fontSize: '2em' }} />;
      case "Partly Sunny":
        return <WiDaySunnyOvercast style={{ fontSize: '2em' }} />;
      case "Some clouds":
        return <WiDayCloudy style={{ fontSize: '2em' }} />;
      case "Mostly clear":
        return <WiDayHaze style={{ fontSize: '2em' }} />;
      default:
        return <WiDayCloudyHigh style={{ fontSize: '2em' }} />;
    }
  }
  
  export default getWeatherIcon;
  