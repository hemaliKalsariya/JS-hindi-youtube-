// singleton

//object literals

const mysym = Symbol("key1")


const Jsuser ={
    name: "Hemali",
   // [mysym]: "mykey1",
    age: 21,
    location: "Surat",
    email: "hemali@gamail.com",
    isLoggedIn: true,
    LastLoggedIn: ["Monday", "Sunday"]
}

// console.log(Jsuser.name);
 console.log(typeof mysym);//symbols
// console.log(Jsuser.age);
// console.log(Jsuser.location);
// console.log(Jsuser.email);
// console.log(Jsuser.isLoggedIn);
// console.log(Jsuser.LastLoggedIn);


// Jsuser.email = "kalsariya@gmail.com"
// console.log(Jsuser);

``
Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
