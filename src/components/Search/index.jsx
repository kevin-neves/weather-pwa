import React, { useState } from 'react';
import P from 'prop-types';

import { fetchWeather } from '../../api/fetchWeather';

const Search = ({ query, setQuery, setWeather }) => {
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <input
      type="text"
      className="search"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={search}
    />
  );
};

Search.propTypes = {
  query: P.string,
  setQuery: P.func,
  setWeather: P.func,
};

export default Search;
