const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/8203c75a0565e4f5fd1e4b1e816b4292/${lat},${lng}`,
    json: true
  },(error,response,body) =>{
     if(!error && response.statusCode === 200){
          callback(undefined,{
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
      }else {
        callback('Unable to fetch weather.');
      }
  });
}

module.exports.getWeather = getWeather;
