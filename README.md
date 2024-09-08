Weather Forecast Web Application

This is a web application built with React and TypeScript that displays a list of cities with an infinite scroll feature and allows users to search cities in real-time. Clicking on a city name will take the user to a weather page that displays the current weather and forecast using the OpenWeather API.

Table of Contents

Features
Technologies Used
Setup Instructions
API Information
Usage
Optional Features
Future Improvements
Features

Cities Table:

Displays cities in a table format with infinite scrolling.
Provides a search-as-you-type feature with autocomplete.
Allows sorting and filtering of table columns.
Clicking on a city name redirects to a weather page for that city.
Supports opening the city weather page in a new tab via right-click.

Weather Page:

Fetches and displays the current weather for the selected city using the OpenWeather API.
Displays temperature, weather description, humidity, wind speed, and atmospheric pressure.
Supports dynamic backgrounds based on the weather condition.
Responsive design to work across different screen sizes.

Error Handling:

Gracefully handles API failures and displays appropriate error messages.

State Management:

Centralized state management using React hooks to manage city and weather data.

Technologies Used:

React: Frontend framework for building UI components.
TypeScript: Provides static typing for the project, ensuring type safety.
Axios: Used to make HTTP requests to fetch city and weather data.
React Router: For routing between the city table page and weather page.
OpenWeather API: To fetch weather data for the selected city.
OpenDataSoft API: To fetch the list of cities.
CSS: For styling and making the application responsive.