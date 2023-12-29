let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score)) //both ways are fine.

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// "33"---> 33
// "33abc"---> NaN(not a number)
// true-->1 ; false--->0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1---> true; 0---> false
// ""---->false
// "Abhinav"---> true


// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)





//*************************Operations***********************//


// let value = 3
// let negValue = -value
// console.log(negValue)

// console.log( 2 + 2)
// console.log( 2 - 2)
// console.log( 2 * 2)
// console.log( 2 ** 3)//------> this will give 2 to the power 3
// console.log( 2 / 3)
// console.log( 2 % 3)// -----> this will give reminder

//**********Combining of Strings*******/

// let str1 = "Hello"
// let str2 = " Abhinav"
// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)//---> output 12
// console.log(1 + "2")//---> output 12
// console.log("1" + 2 +2) //---> output 122
// console.log(1 + "2" + 2)// ---> output 122
// console.log(1 + 2 + "2")//---> output 32; this shows that if we give the first value or middle value as string and others as number 
//                                         // and perform plus(+) operation then, the result will be combined string but if we give the last
//                                         // value as string in line no.60, then the first two nos. get added & finally the added result gets combined with string.

// console.log((3 + 4) * 5 % 3)

                                        //Note: line no. 58, 59, 60 is not a good practice. Better keep the operation in ().

// console.log(true) 



// let num1, num2, num3
// num1 = num2 = num3 = 2+2
// console.table([num1, num2, num3])



// let gameCounter = 100
// gameCounter++
// console.log(gameCounter) //---->output 101

// let gameCounter = 100
// ++gameCounter
// console.log(gameCounter) //----> output 101

//Note: learn about prefix & postfix because it gives different results.


// ************************Prefix(++x) & postfix(x++)**********************

// ****Postfix(x++)*****

// example 1
// let x = 3
// let y = x++
// console.log(`X:${x}, Y:${y}`) 
//output X=4, Y= 3
// x++, the increment operator increments and returns the value before incrementing.

// example 2
// let x2 = 3n
// let y2 = ++x2
// // console.log(`M:${x2}, N:${y2}`) or, // console.log("M:"+x2,"N:"+y2) // output M:4, N:3
// console.log(x2) // output 4n
// console.log(y2) // output 3n




// ****Prefix (++x)****

// example 1
// let a= 3
// let b = ++a
// console.log(`A:${a},B:${b}`)
//output A=4, B=4
//++x, the increment operator increments and returns the value after incrementing.

//example 2
// let a2 = 3n
// let b2 = ++a2
// // console.log("A:"+a2, "B:"+b2) // output A:4, B:4
// console.log(a2); // output 4n
// console.log(b2); //output 4n