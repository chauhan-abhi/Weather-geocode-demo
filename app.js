const request = require('request')
const yargs = require('yargs')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: `address`,
            describe: `Address to fetch weather for`,
            string: true            // parse address as string only
        }
    })
    .help()
    .alias(`help`, 'h')
    .argv

var encodedAddress = encodeURIComponent(argv.address)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBKDshOx98TyQeDC7C2Wj2UzlApnbLgynw&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    // callback after fetching result process result
    //console.log(JSON.stringify(response, undefined, 2)) 
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
})