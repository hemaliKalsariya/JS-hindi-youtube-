const user = {
    username: "Hemali",
    price: 1999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to webside`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Kalsariya Hemali",
// user.price = 20000
// user.welcomeMessage()


// console.log(this);

// function one(){
//     let username =  "hema"
//     console.log(this.username);
// }

// one()

const chai = () => {
    let username =  "hema"
     console.log(this);
}
 //chai()
// const chai = function(){
//     let username =  "hema"
//      console.log(this.username);
// }
//  chai()

//  const addTwo = (num1, num2) => {                        //1 metoad
//     return num1+num2
//  }

//  const addTwo = (num1, num2) => num1 + num2              //2 metoad

 const addTwo = (num1, num2) => (num1 + num2)               //3 metoad
 

 console.log(addTwo(5, 11));
 