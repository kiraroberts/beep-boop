// BACK END
var arr1 = [];
var arr2 = [];

function beeper(userInput) {
  for (var i = 0; i <= userInput; i++) {
    var x = i.toString();
    arr1.push(x)
  };

  arr1.forEach(function(number) {
    if ((number.includes("3"))) {
      arr2.push(" I'm sorry, Dave. I'm afraid I can't do that.")
    } else if ((number.includes("2"))) {
      arr2.push(" boop");
    } else if ((number.includes("1"))) {
      arr2.push(" beep");
    } else {
      arr2.push(number);
    }
  })
  return arr2
};

// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').submit(function (event) {
    event.preventDefault();
    var userInput = ($('input#inputNumber').val());

    var output = beeper(userInput);

    $("h1#result").text(output);
  });
});
