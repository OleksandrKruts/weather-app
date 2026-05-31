import "./WeatherCard.css";

type Props = {
  data: any;
};

export const WeatherCard = ({ data }: Props) => {
  if (!data) return <p className="empty">Search a city</p>;

  return (
    <div className="card">
      <h2>{data.name}</h2>

      <div className="temp">{Math.round(data.main.temp)}°C</div>

      <p className="desc">{data.weather[0].main}</p>

      <div className="details">
        <span>Humidity: {data.main.humidity}%</span>
        <span>Wind: {data.wind.speed} m/s</span>
      </div>
    </div>
  );
};
