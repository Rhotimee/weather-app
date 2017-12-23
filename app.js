const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=23%20marina%20lagos%20nigeria',
    json: true // this tells javascript that its a json file
}, (error, response, body) =>{
    console.log(JSON.stringify(body, undefined, 2)); // we use stringify to format the object to string

})