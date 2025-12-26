const accountId = 14452
let accounEmail = "hemali@gmail.com"
var accountPassword = "1818"    
accountCity = "Jaypur"


/*
Prfer not to use var
because of issue in block scope and functional scope
*/


accounEmail = "151515"
accountPassword = "0707"
accountCity = "surat"


console.log([accountId, accounEmail, accountPassword, accountCity]);


console.table([accountId, accounEmail, accountPassword, accountCity])