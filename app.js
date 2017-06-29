// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/8203c75a0565e4f5fd1e4b1e816b4292/44.059912,-123.0179348',
  json: true
},(error,response,body) =>{
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
}else {
  console.log('Unable to fetch weather.');
}
  console.log(body.currently.temperature);
});
