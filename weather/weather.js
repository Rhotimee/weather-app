const request = require('request');

let getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/10d6b7374e2a19a0a8f3468975b624b9/${lat},${lng}`,
        json: true // this tells javascript that its a json file
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apperentTemperature: body.currently.apparentTemperature,
                timeZone: body.timezone,
                icon: body.currently.icon
            });
        } else {
            callback(`Unable to fetch weather`)
        }
    });
};

module.exports.getWeather = getWeather;

