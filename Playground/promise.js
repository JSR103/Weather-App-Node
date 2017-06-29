//Promise Example that is a bit complicated
var asyncAdd = (a,b) => {
  return new Promise((reslove,reject) =>{
    setTimeout(() =>{
      if(typeof a === 'number' && typeof b === 'number'){
        reslove(a + b);
      }else{
        reject('Error: Arguments need to be numbers');
      }
    },1500);
  });
};

asyncAdd(4,'7').then((res) =>{
  console.log(`Results: ${res}`);

  return asyncAdd(res, 33);
}).then((res) =>{
  console.log('Should be 44: ', res);
}).catch((errorMessage) =>{
  console.log(errorMessage);
});

//Promise example that is very simpe
var somePromise = new Promise((reslove, reject) => {
  setTimeout(() =>{
    reslove('Hey it worked!');
    reject('Unable to fulfill promise');
  },2500);
});

somePromise.then((message) =>{
  console.log('Success: ', message);
},(errorMessage) =>{
  console.log(`Error: `, errorMessage);

});
