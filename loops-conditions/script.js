//April 4th

/*1. Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /)-
The program solves it depending on the operation and shows the result.
*/
let number1 = Number(prompt("type a number"));
console.log(number1);
let number2 = Number(prompt("type another number"));
console.log(number2);
let operator = prompt("type a sign here");

let result ;
if (operator =="+"){
    result = number1 + number2;
} else if (operator =="-"){
    result = number1 - number2;
}else if (operator =="*"){
    result = number1* number2;
}else if (operator =="/"){
    result = number1 / number2;
}else {
    alert ('i dont understand the question');

}
console.log(result);




//2. Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24, 
//or 6! is 1 * 2 * 3 * 4 * 5 * 6 =  720.


let number = Number(prompt("type a number"));
let result = 1;
for(let i = 1; i <= number; i++){
    console.log("the value of i is: " + i);
    console.log("the value of result is: " +result);
    result = i * result;


}
alert (`The result is: ${result}`);

let number = Number(prompt("type a number"));
let result = 1;
let i = 1;
while(i <= number){
    console.log("the value of i is: " + i);
    console.log("the value of result is: " +result);
    result = i * result;
    i++;
}
alert (`The result is: ${result}`);


/*3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: 
"1 sheep...2 sheep...3 sheep..." to the page as a paragraph. If a user types a negative number in,
 alert an error.*/

let number = +prompt('type a number');

let i= 1 ;
if (number <= 0) {
  alert('error! negative number not alowed');

} else
  while (i <= number) {
    document.write(i + "<p>....sheep</p>");
    i++;
  }

/*4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. 
Show the prompt as many times until the user answers correctly.*/
 
let numbers;
numbers = Number(prompt("2+2*2 = "));
console.log(numbers);
while(numbers !== 6){
 numbers = Number(prompt('try again,2+2*2 = ' ));
}

     alert('true');
