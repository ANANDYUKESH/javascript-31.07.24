//1.finding longest string in an array

let arr = ["apple", "banana", "cherry", "date"];
let longest = arr.reduce((a, b) => a.length > b.length? a : b);
console.log(longest);

//2.rotating an array

let Arr = [1,2,3,4];
function arrayRotate(arr) {
	arr.unshift(arr.pop());
	return arr;
}
function rotate() {
	let rotateArr = arrayRotate(Arr);
	console.log("Elements of array = [" + rotateArr + "]");
}
rotate();

// 3.Generating an array of a range
console.log("Generating an array of a range");
const array = Array.from({ length: 10 }, (_, i) => i + 0);
console.log(array);

// 4.intersection of two arrays

console.log("Intersection of two arrays");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let intersection = [...new Set(arr1)].filter(x => arr2.includes(x));
console.log(arr1);
console.log(arr2);
console.log("Intersected array:"+ intersection);

// 5.Array spreading

console.log("Array Spreading");
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let combinedArray = [...arr3, ...arr4];
console.log(arr3);

// 6.Flattering array

console.log("Flattering array");
let arr5 = [[1, 2], [3, 4], [5, 6]];
console.log(arr5);
let flattenedArray = arr5.flat();
console.log(arr5);
console.log("Flattened array:", flattenedArray);

// 7.Sorting array in descending order

console.log("Sorting array in descending order");
let arr6 = [1, 3, 5, 2, 4];
console.log(arr6);
arr6.sort((a, b) => b - a);
console.log(arr6);
