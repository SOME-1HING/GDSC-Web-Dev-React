const wisdom = (currCondition: string) => {
  switch (currCondition) {
    case "Sunny":
      return "Remember to wear sunscreen!";
    case "Clear":
      return "Enjoy the clear skies!";
    case "Partly cloudy":
      return "Expect some clouds today.";
    case "Cloudy":
      return "It's a cloudy day.";
    case "Overcast":
      return "Looks like it's overcast.";
    case "Mist":
      return "Be cautious in misty conditions.";
    case "Patchy rain possible":
      return "Keep an umbrella handy.";
    case "Patchy snow possible":
      return "Watch out for possible snow.";
    case "Patchy sleet possible":
      return "Be wary of sleet.";
    case "Patchy freezing drizzle possible":
      return "Freezing drizzle might occur.";
    case "Thundery outbreaks possible":
      return "Be prepared for possible thunderstorms.";
    case "Blowing snow":
      return "Watch out for blowing snow.";
    case "Blizzard":
      return "Be cautious in blizzard conditions.";
    case "Fog":
      return "Be careful driving in foggy conditions.";
    case "Freezing fog":
      return "Be cautious in freezing fog.";
    case "Patchy light drizzle":
      return "Expect light drizzle.";
    case "Light drizzle":
      return "Expect drizzle.";
    case "Freezing drizzle":
      return "Be cautious in freezing drizzle conditions.";
    case "Heavy freezing drizzle":
      return "Be cautious in heavy freezing drizzle conditions.";
    case "Patchy light rain":
      return "Expect light rain.";
    case "Light rain":
      return "Expect rain.";
    case "Moderate rain at times":
      return "Expect moderate rain at times.";
    case "Moderate rain":
      return "Expect moderate rain.";
    case "Heavy rain at times":
      return "Expect heavy rain at times.";
    case "Heavy rain":
      return "Expect heavy rain.";
    case "Light freezing rain":
      return "Be cautious in light freezing rain conditions.";
    case "Moderate or heavy freezing rain":
      return "Be cautious in moderate or heavy freezing rain conditions.";
    case "Light sleet":
      return "Expect light sleet.";
    case "Moderate or heavy sleet":
      return "Expect moderate or heavy sleet.";
    case "Patchy light snow":
      return "Expect light snow.";
    case "Light snow":
      return "Expect snow.";
    case "Patchy moderate snow":
      return "Expect patchy moderate snow.";
    case "Moderate snow":
      return "Expect moderate snow.";
    case "Patchy heavy snow":
      return "Expect patchy heavy snow.";
    case "Heavy snow":
      return "Expect heavy snow.";
    case "Ice pellets":
      return "Watch out for ice pellets.";
    case "Light rain shower":
      return "Expect light rain showers.";
    case "Moderate or heavy rain shower":
      return "Expect moderate or heavy rain showers.";
    case "Torrential rain shower":
      return "Expect torrential rain showers.";
    case "Light sleet showers":
      return "Expect light sleet showers.";
    case "Moderate or heavy sleet showers":
      return "Expect moderate or heavy sleet showers.";
    case "Light snow showers":
      return "Expect light snow showers.";
    case "Moderate or heavy snow showers":
      return "Expect moderate or heavy snow showers.";
    case "Light showers of ice pellets":
      return "Expect light showers of ice pellets.";
    case "Moderate or heavy showers of ice pellets":
      return "Expect moderate or heavy showers of ice pellets.";
    case "Patchy light rain with thunder":
      return "Expect patchy light rain with thunder.";
    case "Moderate or heavy rain with thunder":
      return "Expect moderate or heavy rain with thunder.";
    case "Patchy light snow with thunder":
      return "Expect patchy light snow with thunder.";
    case "Moderate or heavy snow with thunder":
      return "Expect moderate or heavy snow with thunder.";
    default:
      return currCondition;
  }
};

export default wisdom;
