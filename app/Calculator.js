function Calculator() {
}
// Calculator.prototype.calculate = function(inputString) {
//     this.inputString = inputString.trim();
//     this.answer = 0;
//     if(inputString !== "")
//     {
//         var splitted = this.inputString.split(' ');
//         if(splitted.length === 1) {
//             this.answer = Number(inputString);
//         } else if(splitted[1] === '+') {
//             this.answer = Number(splitted[0]) + Number(splitted[2]);
//         } else if(splitted[1] === '-') {
//             this.answer = Number(splitted[0]) - Number(splitted[2]);
//         }

//         if(splitted.length > 3) {
//             if(splitted[3] === '+') {
//                 this.answer += Number(splitted[4]);
//             } else if(splitted[3] === '-') {
//                 this.answer -= Number(splitted[4]);
//             }
//         }
//     }
//     return this.answer;
// }

// refactor code 
Calculator.prototype.calculate = function(inputString) {
  this.inputString = inputString.trim();
  var arr = this.inputString.split(' ');
  var pluses = Number(arr[0]);
  var minuses = 0; 
  for(var i = 2; i < arr.length; i += 2) {
    if(arr[i - 1] === '+') {
      pluses += Number(arr[i]);
    } else if(arr[i - 1] === '-') {
      minuses += Number(arr[i]);
    }
  }
  return pluses - minuses;
}

module.exports = Calculator;