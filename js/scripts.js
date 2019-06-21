// BACK END


// $('#result').empty();


// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').click(function (event) {
    event.preventDefault();
    var arr1 = [];
    var arr2 = [];
    var userInput = ($('input#inputNumber').val());



    for (var i = 0; i <= userInput; i++) {
      var x = i.toString();
      arr1.push(x)
    };

      arr1.forEach(function(g) {
        if ((g.includes("3"))) {
          arr2.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if ((g.includes("2"))) {
          arr2.push("boop");
      } else if ((g.includes("1"))) {
          arr2.push("beep");
      } else {
          arr2.push(g);
      }
    });
    console.log(arr2);
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
