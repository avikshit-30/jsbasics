var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.tags)

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: getRandomJoke.body,
    e: "**",
    T: "l ",
  })
);



  
