// ! Square the Every Value in array and store in the new array
let arr = [1, 2, 3, 4, 5, 6];

let squareArray = [];
for (let i = 0; i < arr.length; i++) {
  squareArray.push(arr[i] ** 2);
}
console.log(squareArray);

let squaredArray = arr.map((value) => value ** 2);
console.log(squaredArray);

// ! From the array filter all the odd numbers and store in a array

let arr1 = [1, 2, 3, 4, 5, 6];

// ! By using the for loop

let oddNumbers = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 != 0) {
    oddNumbers.push(arr1[i]);
  }
}
console.log(oddNumbers);

// ! By using the filter

let oddValue = arr1.filter((value) => value % 2 != 0);
console.log(oddValue);

// ! Find 

let arr2 = ["ravi", "raghu", "52", 123, true, 52];

// ! By using the loops

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "52") {
    console.log(arr2[i]);
  }
}

let findValue = arr2.find((value) => value === "52");
console.log(findValue);
