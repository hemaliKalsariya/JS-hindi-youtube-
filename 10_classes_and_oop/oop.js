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

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);
