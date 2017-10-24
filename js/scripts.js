$(document).ready(function() {
  $("form#count").submit(function(event) {
    event.preventDefault();
    var countTo = $("input#countTo").val();
    var countBy = $("input#countBy").val();


    var output = [];
    for (var currentNumber = 0; currentNumber <= countTo; currentNumber += countBy) {
      output.push(currentNumber);
    }
    alert("hello");


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
