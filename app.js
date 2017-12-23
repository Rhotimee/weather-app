const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=23%20marina%20lagos%20nigeria',
    json: true // this coverts the json to string
}, (error, response, body) =>{
    console.log(body);

})