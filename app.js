const request = require('request');
const yargs = require('yargs');

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

const encodedAddress = encodeURIComponent(argv.address);


request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true // this tells javascript that its a json file
}, (error, response, body) =>{
    // console.log(JSON.stringify(body, undefined, 2)); // we use stringify to format the object to string
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Address: ${body.results[0].geometry.location.lat}`)
    console.log(`Address: ${body.results[0].geometry.location.lng}`)
})