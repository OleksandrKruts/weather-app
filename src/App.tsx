import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import { Loader } from "./components/Loader/Loader";

export default function App() {
  const { data, loading, error, getWeather } = useWeather();

  return (
    <div className="app">
      <h1>Weather App</h1>

      <SearchBar onSearch={getWeather} />

      {loading && <Loader />}

      {error && <p style={{ color: "#f87171", marginTop: 10 }}>{error}</p>}

      {!loading && <WeatherCard data={data} />}
    </div>
  );
}
