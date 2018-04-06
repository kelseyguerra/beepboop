// business-logic //

function robotBoy(number) {
  var beeps = "Beep!";
  var boops = "Boop!";
  var dave = "I'm sorry, dave. I'm afraid I can't do that.";
  var robotArray = [];
  for (var i = 0; i <= number; i++) {
    var userString = i.toString().split("");
    if (i % 3 === 0 && i > 0) {
      robotArray.push(dave);
    } else if (userString.includes("1")) {
      robotArray.push(boops);
    } else if (userString.includes("0")) {
      robotArray.push(beeps)
    } else {
      robotArray.push(i)
    }
  }
  return robotArray;
}



// user-interface logic //

$(function() {
  $("#boop").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var robotOutput = robotBoy(userInput);
    $("#output").append("<p>[" + robotOutput + "]<p>");

  });
});
