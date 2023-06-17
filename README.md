# Weather App

## Description
The Weather App is a web application that allows users to search for weather information based on a specific location. It retrieves real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface. Users can search for weather information by entering the name of a city, and the app will provide details such as temperature, humidity, wind speed, and a weather icon.

![Weather App Opening Screenshot](pictures/opening.png)

![Weather App In Use Screenshot](pictures/inUse.png)

## Features
- Search for weather information by city name
- Display current temperature in Celsius
- Show weather icon representing the current weather conditions
- Provide details such as wind speed and humidity
- Background image changes based on the weather description

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeatherMap API
- Font Awesome for icons

## Installation and Usage
1. Clone the repository:
$ git clone [repository URL]

css
Copy code
2. Navigate to the project directory:
$ cd weather-app

markdown
Copy code
3. Open the `index.html` file in a web browser.

4. Enter the name of a city in the search box and press Enter or click the search button.

5. The app will display the weather information for the specified city.

## API Key
To use the Weather App, you need to obtain an API key from OpenWeatherMap. Follow these steps:

1. Visit the [OpenWeatherMap website](https://openweathermap.org/) and sign up for an account (if you don't have one already).

2. After signing in, go to the [API Keys](https://home.openweathermap.org/api_keys) page.

3. Generate a new API key by providing a name for the key and selecting the appropriate plan.

4. Copy the generated API key.

5. Open the `index.js` file in your code editor and replace `{API key}` in the `url` variable with your API key.

const apiKey = "YOUR_API_KEY";
const url = https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=${apiKey};

yaml
Copy code

## Contributing
Contributions to the Weather App are welcome! If you find any issues or would like to add new features, please submit a pull request. Make sure to follow the existing coding style and provide detailed information about the changes made.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any questions or suggestions, please feel free to contact the project maintainer:

- Name: Jaani Söderström
- Email: soderstrom.jaani@gmail.com

Please allow some time for a response, as the maintainer's availability may vary.

---
