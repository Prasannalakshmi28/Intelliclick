import React, { useEffect, useState } from 'react';
import { fetchCities } from '../services/cityService';

interface City {
  fields: {
    name: string;
    country: string;
    timezone: string;
  };
}

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);

  const loadCities = async () => {
    const cityData = await fetchCities(searchQuery, offset);
    setCities(prevCities => [...prevCities, ...cityData]);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    loadCities();
  }, [offset, searchQuery]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
    if (bottom) {
      setOffset(prevOffset => prevOffset + 100);
    }
  };

  return (
    <div onScroll={handleScroll} style={{ height: '500px', overflowY: 'scroll' }}>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for cities..." />
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr key={index}>
              <td>{city.fields.name}</td>
              <td>{city.fields.country}</td>
              <td>{city.fields.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;
