const accountId = 12345
let accountEmail = "abc.com"
var accountPassword = 1122
accountCity ="Delhi"


accountEmail = "efg.com"
accountPassword = 2233
accountCity = "Noida"


accountEmail = "def.com"
accountPassword = 6969
accountCity = "Gurgaon"


/*
Note: 
--->always use const and let keyword in JS to declare variable
    avoid using var to avoid issue in block scope & functional scope

---> ; is optional in Js

---> use const keyword to declare variable that you don't want to change later.

---> for single variable printing, simply use console.log(variableName)

---> for multiple variable printing, simply can repeat console.log(variableName) multiple times to print all the variables separately
but to save time & space use, 
console.table([variableName,variableName, .......])------>this will print multiple variables at a time in a table form.

---> variables can be declared in Js without let and const as I did above in line 4 for accountCity, but it's not a good practice.

---> to run the entire code in terminal, open terminal(shortcut----ctrl+ ~) then type, node foldername/filename with .js extension, press enter.
*/


console.table([accountId,accountEmail,accountPassword,accountCity])

