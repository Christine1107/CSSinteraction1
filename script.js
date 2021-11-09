//Calculator

//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result in an alert. It should also log a string to the console like "Half of 5 is 2.5.".

//Write a function called fortune that will take one argument (your visitor's name) and prints a random "fortune cookie style" fortune into an element of your page.

//Write a function called restyle that applies new CSS styles to the fortune text in a random manner. Modify at least three CSS properties.
var inputtext;
var button;
var outputParagraph;
var heading;

var fortunes = ["Purple is your lucky color today!!!","Red is your lucky color today!!!", "Orange is your lucky color today!!!","Green is your lucky color today!!!","Blue is your lucky color today!!!", "Black is your lucky color today!!!", "White is your lucky color today!!!"];

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  button = document.getElementById("fortune-button");
  outputParagraph = document.getElementById("fortune-output");
  inputtext = document.getElementById("fortune-input");

  button.addEventListener("click", function(){
   fortune();

})






function fortune(){

  var input = inputtext.value;
  var randomFortuneIndex = Math.floor(Math.random()*fortunes.length);
  outputParagraph.innerText = input+ ","+fortunes[randomFortuneIndex];

}
