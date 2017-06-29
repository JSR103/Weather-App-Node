console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');

}, 2000);


setTimeout(() =>{
  console.log('Hell0');//wil not output first
}, 0);//call stack, Node Api, call quie

console.log('Finishing up');
