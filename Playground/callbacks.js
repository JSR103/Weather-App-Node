var getUser = (id,callback) => {
  var user = {
    id: id,
    name: 'Sora'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(10, (user) => {
  console.log(user);
});
