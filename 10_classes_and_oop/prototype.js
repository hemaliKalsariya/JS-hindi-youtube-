let myName = "hemali    "
// console.log(myName.length); 
// console.log(myName.trim().length); 



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "slinging webs",

    getSpiderPower: function() {
        console.log(`spiderman power is ${this.spiderman}`);
    }   
}

Object.prototype.hemali = function(){
    console.log(`hemali is present in all objects`);

}

heroPower.hemali()
myHeros.hemali()

// inheritance

const Teacher = {
   makeVideos: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = { 
    makeAssignment : "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// modern syntex

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "hemali     "

String.prototype.truelength = function() {
    console.log(`true length is ${this.trim().length}`);
    console.log(`${this}`);
    console.log(`${this.name}`);
    
}

anotherUserName.truelength()
"hemali".truelength()
"chaiaurcode".truelength()