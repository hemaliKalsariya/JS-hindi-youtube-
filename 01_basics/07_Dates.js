//Date

let myDate = new Date()
console.log(myDate.toJSON());
//2026-01-01t06:59:59.662Z
console.log(myDate.toDateString());
//Thu Jan 01 2026
console.log(myDate.toISOString());
//2026-01-01T07:03:00.491Z
console.log(myDate.toLocaleDateString());
//1/1/2026
console.log(myDate.toString());
//Thu Jan 01 2026 07:03:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString());
//07:03:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getTimezoneOffset());
//0
console.log(myDate.toLocaleTimeString());
//7:08:56 AM
console.log(myDate.toLocaleString());
//1/1/2026, 7:08:56 AM
console.log(myDate.toUTCString());
//Thu, 01 Jan 2026 07:08:56 GMT

console.log(typeof myDate);
// object
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());
console.log(newDate.getTime());


console.log(newDate.toLocaleString('defalut',{
    weekday: "long",  
}));



