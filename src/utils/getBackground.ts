import sunny from "../assets/sunny.jpg";
import cloudy from "../assets/cloudy.jpg";
import mist from "../assets/mist.jpg";
import drizzle from "../assets/drizzle.jpg";
import rain from "../assets/rain.jpg";
import freezingdrizzle from "../assets/freezingdrizzle.jpg";
import sleet from "../assets/sleet.jpg";
import snow from "../assets/snow.jpg";
import thunder from "../assets/thunder.jpg";

const getBackground = (currCondition: string) => {
  switch (currCondition) {
    // Clear skies
    case "Sunny":
      return sunny;
    case "Clear":
      return sunny;
    // Cloudy conditions
    case "Partly cloudy":
      return cloudy;
    case "Cloudy":
      return cloudy;
    case "Overcast":
      return cloudy;
    // Fog/Mist conditions
    case "Mist":
      return mist;
    case "Fog":
      return mist;
    case "Freezing fog":
      return mist;
    // Drizzle
    case "Patchy light drizzle":
      return drizzle;
    case "Light drizzle":
      return drizzle;
    // Rain
    case "Moderate rain at times":
      return rain;
    case "Moderate rain":
      return rain;
    case "Light rain":
      return rain;
    case "Heavy rain at times":
      return rain;
    case "Heavy rain":
      return rain;
    // Freezing Drizzle
    case "Freezing drizzle":
      return freezingdrizzle;
    case "Heavy freezing drizzle":
    case "Light freezing rain":
      return freezingdrizzle;
    case "Moderate or heavy freezing rain":
      return freezingdrizzle;
    // Sleet
    case "Light sleet":
      return sleet;
    case "Moderate or heavy sleet":
      return sleet;
    // Snowfall
    case "Patchy light snow":
      return snow;
    case "Light snow":
      return snow;
    case "Patchy moderate snow":
      return snow;
    case "Moderate snow":
    case "Patchy heavy snow":
      return snow;
    case "Heavy snow":
      return snow;
    // Thunderstorms (Rain/Snow)
    case "Patchy light rain with thunder":
      return thunder;
    case "Moderate or heavy rain with thunder":
      return thunder;
    case "Patchy light snow with thunder":
      return thunder;
    case "Moderate or heavy snow with thunder":
      return thunder;
    default:
      return mist;
  }
};

export default getBackground;
