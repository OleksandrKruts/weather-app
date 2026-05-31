import { useState } from "react";
import "./SearchBar.css";

type Props = {
  onSearch: (city: string) => void;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city.trim());
    setCity("");
  };

  return (
    <div className="search">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter city..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
