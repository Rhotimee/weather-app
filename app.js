const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address); // undefined is for filtering function and 2 is for indentation

        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) =>{
            if (errorMessage){
                console.log(errorMessage)
            } else {
                // console.log(JSON.stringify(weatherResults, undefined, 2))
                console.log(`The temperature is currently ${weatherResults.temperature} and  it is a ${weatherResults.icon} in ${results.address}`)
            }
        });
    }

});

