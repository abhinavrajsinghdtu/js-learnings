//  // Primitive datatypes
// // 7 types : string, Number, Boolean, Null, Undefined, Symbol, BigInt




// const score = 100
// const scoreValue = 100.5

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol ('123')

// console.log(id === anotherId) // output false 
// // Note: id and anotherId are different things and gives different results even if the same value is passed.

// const bigNumber = 33547431232345567n


//  //Reference (Non primitive) datatypes
//  // 3 types : Array, Objects, Functions.

//  const heroes = ["Shahid", "Arjun", "Salman"]
//  let myObj = {
//     name: "Abhinav"
//     age: 25
//  }


// Stack Memory(Primitive datatypes container) & Heap Memory( Non-Primitive datatypes container)

let myYoutubename = "abhinavdotcom"

let anothername = "myYoutubename"
anothername = "singhdotcom"

console.log(anothername)
console.log(myYoutubename)

let mohit= {
   email: "mohit@google.com", upi: "mohit@sbi"}

let arya = mohit 
arya.email = "arya@google.com"
arya.upi = "arya@sbi"



console.log(mohit.email)
console.log(arya.email)

console.log(arya.upi)
console.log(mohit.upi)


//Note: here, arya takes reference from mohit and when made change in arya's email, Mohit's email also got changed.
// which shows that in Heap Memory, changes is made in original value.