import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (city: string) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    },
  );

  return data;
};
