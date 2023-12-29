// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);  // equal to
// console.log(2 != 1);  // not equal to
// Note: The above comparisons are good

//Note: Avoid comparisons like this where we are comparing two different datatypes i.e., string & number. Always compare same datatypes.
// console.log("2" > 1) // output true
// console.log("02" > 1) // output true

// Note: Avoid such comparisons
// console.log(null > 0) // false
// console.log(null == 0) //false
// console.log(null >= 0) //true

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

//Note: The reason behind above condition is that an equality check == and comparisons >, <, <=, >=, works differently.
    // comparisons convert null into a number, treating it as 0.
    // That's why null >=0 is true.



// Strict check (===)
