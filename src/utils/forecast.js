const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1884aa69ffc115f3439342cc9898a1d4&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees Celsius. It feels like " +
          body.current.feelslike +
          ". Wind speed is " +
          body.current.wind_speed +
          "km/h, Direction: " +
          body.current.wind_dir
      );
    }
  });
};

module.exports = forecast;
