$(document).ready(function() {
  $("form#count").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var output = [];
    for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy) {
      output.push(currentNumber);
    }

    if ((Number.isInteger(countTo)) && (Number.isInteger(countBy))) {
    alert(output);

    } else {
      $("input#countTo").addClass("is-invalid");
      $("input#countBy").addClass("is-invalid");
      $(".invalid-feedback").show();
    }

  });
});
    // $("#theList").


  //
  // var index = [];
  // for (var currentNumber = 5; currentNumber <= 30; currentNumber += 5) {
  //   index.push(currentNumber);
  // }
  // alert(index);

//   var output = [];
// for (var currentNum = 7; currentNum <= 50; currentNum += 7) {
// 	output.push(currentNum);
// }
// alert(output);
