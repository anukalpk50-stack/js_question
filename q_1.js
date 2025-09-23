// todo Q 1. interchange their elements of position like all even positions ? like, and positions = are , 2,4,6,8.
// arr2 = [2, 34, 4, 56, 6, 6, 6, 8];
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [2, 34, 4, 56, 6, 6, 6, 8];
// for ( let i = 2; i < arr1.length; i +=1){
// let temp =arr1[i];
// arr1[i] = arr2[i];
// arr2[i] = temp ;
//     arr1[i] =arr2[i];

// }
// console.log(arr1);
// console.log(arr2);
// console.clear()
// console.log(arr1.indexOf(3));

// todo (1) keep adding numbers to the array in 1 until 0 is added to  the array

// const arr = [2, 4, 5];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);

// todo (2) filter for numbers divisible by 10 from a given array
// let arr = [20, 22, 50, 53, 60, 80, 98, 90, 78]
// const divisible_by_10 = arr.filter(num => num % 10 === 0);
// console.log(divisible_by_10);

//(3) todo create an array of numbers and take input from the user to add numbers to this array.


// (4)todo create an array of square of given numbers.

// (5)todo use reduce to calculate factorial of a given numbers from an array of first n natural numbers. (n being the number where factorial needs to be calculated)
let arr = [5, 6, 7, 9, 11]
const factorial = arr.reduce((num1, num2) => {
    return num1 * num2
})

console.log(factorial);
