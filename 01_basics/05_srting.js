const name = "Hemali" 
const repoCount = 41
console.log(name + repoCount);



console.log(`Hallo my name is ${name} and my repo cont is ${repoCount}`);

const gameName = new String('hemalis')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const mySrting = gameName.substring(1, 5)
console.log(mySrting);

const anotherSrting = gameName.slice(-7, 5)
console.log(anotherSrting);

const newSrtingOne = "   Hemali    Kalsariya"
console.log(newSrtingOne);
console.log(newSrtingOne.trim());

const contentString = "Hello, world";

console.log(contentString.big());

const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));


