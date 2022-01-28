import React, { useState } from 'react';

import './App.css';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  return (
    <div className="main-container">
      <Search query={query} setQuery={setQuery} setWeather={setWeather} />
      {weather.main && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
