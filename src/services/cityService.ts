import axios from 'axios';

const CITIES_API_URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&rows=100&sort=name';

export const fetchCities = async (query: string = '', offset: number = 0) => {
    const url = `${CITIES_API_URL}&start=${offset}&q=${query}`;
    try {
        const response = await axios.get(url);
        return response.data.records;
    } catch (error) {
        console.error("Error fetching cities: ", error);
        return [];
    }
};
