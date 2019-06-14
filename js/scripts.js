// BACK END


// $('#result').empty();


// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').click(function (event) {
    event.preventDefault();

    var userInput = [($('input#inputNumber').val())];
    console.log(userInput);

    for (index = userInput; index >= 0; index += 1) {
      const map1 = userInput.map(X => [userInput] - 1);
      userInput.push(map1);
      console.log(userInput[1]);
    };
  });
});









// for (var index = userInput; index >= 0; index -= 1) {
  //   var halErrors = [1, 2, 3];
  //
  //    if (halErrors.includes(1)([index])) {
    //    userInput.splice(index, 1, "beep");
    //  } else if (halErrors.includes(2)(index)) {
      //    userInput.splice(index, 1, "boop");
      //  } else (halErrors.includes(3)(index))
      //    userInput.splice(index, 1, "I'm sorry Dave. I'm afraid I can't do that.");
