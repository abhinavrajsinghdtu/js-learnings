// Array

const myArr =  [1,2,3,4,5]
const myHeros = ["Ram", "Krishna", "Shiva"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);


// Array Methods

// myArr.push(6)
// myArr.push(7)  // push()---> Adds no. at last of the array

// myArr.pop()   // pop()---> needs no argument inside open braces, it simply removes last element of an array.


// myArr.unshift(7) //unshift()---> adds given element to the first of an array.

// myArr.shift() // shift()---> needs no argument inside open braces, it simply removes 1st element of an array.




// console.log(myArr.includes(8)); // arrayname.includes()---> gives boolean.

// console.log(myArr.indexOf(2)) 
// console.log(myArr.indexOf(9)) // for non-present element, it gives -1 output.

// const newArr = myArr.join() // join()---> joins two arrays and also converts to string.


// console.log(myArr);
// console.log(typeof newArr);

//Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // here (1,3) will include 1st & 2nd index element but not 3rd.
// Slice doesn't change original Array, it just performs its operation.

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // here (1,3) will include 1st, 2nd and 3rd index element.
// Splice removes the elements and makes new array of remaining elements. i.e., it manipulates an array.


console.log("C ", myArr);
console.log(myn2);



