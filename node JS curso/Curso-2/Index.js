

let hasHobbies = false
let points = [10, 20, 30]
let user = {
    name: "Facu",
    lastname: "Lange",
    age: 20

}
let PI = 3.1415

console.log(user.name)
console.log(user.lastname, user.age)
if (user.age == 20) {
    console.log("Cumple")
    
    
} 
else{
    console.log("No cumple")
}



function showUserinfo(userName, userAge) {
    return `The username is ${userName}, the user is ${userAge} year old`
} 

console.log(showUserinfo("Facu", 20))
console.log(showUserinfo("Mauro", 33))
console.log(showUserinfo("Mili", 21))
