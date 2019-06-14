// BACK END


// $('#result').empty();


// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').click(function (event) {
    event.preventDefault();

    var userInput = ($('input#inputNumber').val());
    var arr1 = [];
    var arr2 = [];

    for (var i = 0; i <= userInput; i++) {
      var x = i.toString();
      for (var y = 0; y < x.length; y++) {
      var z = parseInt((i + '').charAt(0))
        arr1.push(z)
        if (z === "3") {
          var output =  "I'm sorry, Dave. I'm afraid I can't do that.";
      } else if (z === "2") {
          var output = "boop";
      } else if (z === "1") {
          var output =  "beep";
      } else {
          var output = i;
      }
      arr1.push(output);
      console.log(arr1);
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
