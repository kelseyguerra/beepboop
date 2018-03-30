$(document).ready(function() {
  $("form#boop").submit(function(event) {
    event.preventDefault();
});
});
var binary = ["0", "1"];
function robotboy(number) {
  var userArray = number.split("");
  var output0 = "Beep!";
  var output1 = "Boop!";
  var output2 = "I'm sorry, ";
  var output3= ". i'm afraid I can't do that.";
  var nameInput = $("input#name").val();
  var robotOutput = "";
  var range = [];
    for (var i = 0; i < userArray.length; i++) {
      if (number % 3 === 0 && number > 0) {
        robotOutput = output2 + nameInput + output3

      } else if (userArray[i] === binary[1]) {
        robotOutput = output1
        break
      } else if (userArray[i] === binary[0]) {
        robotOutput = outputg0
      } else {
        for (var j = 0; j <= number; j++) {
          range.push(j);
          robotOutput = range
        }
      }
    }
  return robotOutput
}

$(function() {
  $("#boop").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var robotSpeech = robotboy(userInput);
    $("#output").append("<p>" + robotSpeech + "</p>");
    $(".name").text(nameInput);
  });
});
