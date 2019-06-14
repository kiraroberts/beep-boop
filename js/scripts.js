// BACK END


// $('#result').empty();


// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').click(function (event) {
    event.preventDefault();

    //var userInput = [];

    var userInput = ($('input#inputNumber').val());


    for (var index = userInput; index >= 0; index -= 1) {
      var halErrors = [1, 2, 3];

       if (halErrors.includes(1)(function(index))) {
       userInput.splice(index, 1, "beep");
     } else if (halErrors.includes(2)(index)) {
       userInput.splice(index, 1, "boop");
     } else (halErrors.includes(3)(index))
       userInput.splice(index, 1, "I'm sorry Dave. I'm afraid I can't do that.");
    console.log(userInput[index]);
    };
  });
});
