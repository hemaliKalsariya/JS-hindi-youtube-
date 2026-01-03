//const tinderUser = new Object() // singalton object
const tinderUser = {} // nonsingalton object

tinderUser.id = "451hmk"
tinderUser.name = "vorb"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "hemali@gamil.com",
    fullname: {
        Userfullname:{
            firstname: "Hemali",
            Lastname: "Kalsariya"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullname.Userfullname);
// console.log(regularUser.fullname.Userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));

const course = {
    coursename: "js in hindi",
    price: "101010",
    courseInstrctor: "Hemali"
}
const {courseInstrctor} = course
console.log(courseInstrctor);






