// BACK END


// $('#result').empty();


// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').click(function (event) {
    event.preventDefault();

    var userInput = ($('input#inputNumber').val());

    for (int i = 0; i <= userInput; i++) {
    var x = i.toString();
      for (int y = 0; y < x.length(); y++) {
      var z = x.charAt(y);
        if (z = "3") {
          return "I'm sorry Dave.";
      } else if (z = "2") {
          return "boop";
      } else if (z = "1") {
          return "beep";
      } else {
          return i;
      }


    console.log(userInput);
    };
    };
  });
});






// for (index = userInput; index >= 0; index += 1) {
  //   const map1 = userInput.map(X => [index] - 1);
  //   userInput.push(map1);
  //   console.log(userInput);



// for (var index = userInput; index >= 0; index -= 1) {
  //   var halErrors = [1, 2, 3];
  //
  //    if (halErrors.includes(1)([index])) {
    //    userInput.splice(index, 1, "beep");
    //  } else if (halErrors.includes(2)(index)) {
      //    userInput.splice(index, 1, "boop");
      //  } else (halErrors.includes(3)(index))
      //    userInput.splice(index, 1, "I'm sorry Dave. I'm afraid I can't do that.");
