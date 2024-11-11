// TASK 1 ------------ Palindrome Checker

// let userInput = prompt("please Enter a palindrome value");
// final=userInput.toLowerCase().trim();

// console.log(final);

// reverseFinal=final.split().reverse().join("");
// console.log(reverseFinal);
// if(final == reverseFinal){
//     console.log("palindrome value");
// }else{
//     console.log("NOT palindrome value");
// }
// ########################################################################################################### 


// TASK 2 ------------ Count 'e' Characters in a String

// let userInput = prompt("please Enter Some Words");
// count = 0;
// if (userInput != null && userInput.trim() != "") {
//     let userInputEdit = userInput.toLowerCase().split("");
//     for (i = 0; i <= userInputEdit.length; i++) {
//         if (userInputEdit[i] == "e") {
//             count++
//         }
//     }
// } else {
//     alert("please Enter Some Words")
//     location.reload();
// }
// console.log(`total count of e is: ${count}`);

// ########################################################################################################## 

// TASK 3 ------------  Circle Area Calculator
//

// let radiusCircle = prompt("Please Enter The Radius :");
// if (radiusCircle > 0 && radiusCircle != isNaN && radiusCircle.trim() != "") {
//     let CircleArea = (Math.PI * Math.pow(radiusCircle, 2)).toFixed(2)
//     console.log(CircleArea);
// } else {
//     alert("please enter a valid positive number");
//     location.reload();
// }

// ############################################################################################################# 

// TASK 4 ------------ Array Operations 

// let num1 = prompt("Enter valid Number --- Enter first number ")
// let num2 = prompt("Enter valid Number --- Enter second number ")
// let num3 = prompt("Enter valid Number --- Enter third number ")
// let numbers = [parseFloat(num1), parseFloat(num2), parseFloat(num3)]
// let sumResult = 0;
// let mulResult = 1;
// let divResult;
// if (numbers !== isNaN || numbers.trim() !== "") {
//     if (numbers.includes(0) !== true) {
//         for (i = 0; i < numbers.length; i++) {
//             sumResult += numbers[i];
//             mulResult *= numbers[i];
//         }
//         let divfirst = (numbers[0] / numbers[1]);
//         divResult = parseFloat(divfirst) / numbers[2]
//         console.log(divfirst);
//         console.log(`First / addition, is ${sumResult}`);
//         console.log(`second / multiplication,  is ${mulResult}`);
//         console.log(`third / division  is ${divResult}`);
//     } else {
//         alert("Zero in all transaction is a trash, write anther number");
//         location.reload();
//     }
// } else {
//     alert("Write a valid number");
//     location.reload();
// }
// console.log(numbers);

// ################################################################################################################## 

// TASK 5 ------------ Array Sorting


// let numbersArray = [];
// for (i = 0; i < 5; i++) {
//     numbers = prompt("please Enter a positive number");
//     numbers = parseFloat(numbers);
//     if (numbers > 0 && numbers !== isNaN) {
//         numbersArray.push(numbers)
//     } else {
//         alert("Enter a Valid number")
//         location.reload();
//     }
// }

// console.log(numbersArray);
// for (i = 0; i < numbersArray.length; i++) {
//     document.write(` value ${i + 1} :  ${numbersArray[i]}`+`<br>`
//     )
// }
// // Ascending Order
// document.write(`<br> Ascending Order : <br>`)
// let ascendingArray = numbersArray.sort()
// console.log(numbersArray);
// for (i = 0; i < ascendingArray.length; i++) {
//     document.write(` value ${i + 1} :  ${ascendingArray[i]}`+`<br>`
//     )
// }
// document.write(`<br> descending Order : <br>`)
// // Descending Order
// let descendingArray = numbersArray.sort().reverse()
// console.log(descendingArray);
// for (i = 0; i < descendingArray.length; i++) {
//     document.write(` value ${i + 1} :  ${descendingArray[i]}`+`<br>`
//     )
// }
// document.write (`<br> Ascending Array : ${ascendingArray.sort().join(", ")} <br>`)
// document.write (`descending Array : ${descendingArray.sort().reverse().join(", ")}`)





