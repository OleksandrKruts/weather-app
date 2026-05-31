import { useState } from "react";
import { fetchWeather } from "../api/weather";

export const useWeather = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async (city: string) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchWeather(city);
      setData(result);
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getWeather };
};
