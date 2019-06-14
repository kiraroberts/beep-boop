// BACK END

var userInput = [];
$('#result').empty();
var userInput = ($('#inputNumber').val()).split('');
console.log(userInput)


// FRONT END

$(document).ready(function () {
  $('form.inputNumber').submit(function (event) {
    event.preventDefault();
  });
});
