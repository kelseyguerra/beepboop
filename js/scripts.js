$(document).ready(function() {
  $("form#boop").submit(function(event) {
    event.preventDefault();
});
});
var binary = ["0", "1"];
function robotboy(number) {
  var userArray = number.split("");
  var outputString0 = "Beep!";
  var outputString1 = "Boop!";
  var outputString3 = "I'm sorry, Dave. I'm afraid I can't do that.";
  var nameInput = $("input#name").val();
  var robotOutput = "";
  var range = [];
    for (var i = 0; i < userArray.length; i++) {
      if (number % 3 === 0 && number > 0) {
        robotOutput = outputString3

      } else if (userArray[i] === binary[1]) {
        robotOutput = outputString1
        break
      } else if (userArray[i] === binary[0]) {
        robotOutput = outputString0
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
