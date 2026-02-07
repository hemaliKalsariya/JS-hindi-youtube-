const user = {
    username: "Hemali",
    loginCount: 10,
    isLoggedIn: true,

    getUserDetails: function() {
        // console.log("got user details from database");
        //  console.log(`userName: ${this.username}`);
           console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Hello ${this.username}`);
    }

    return this;
}

const userOne = new  User("Hemali", 10, true);
const userTwo = new User("Kalsari", 5, false);

console.log(userOne);
console.log(userTwo.constructor);