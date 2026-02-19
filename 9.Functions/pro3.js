console.log("Welcome to coding world");
function greet(username, course="Data science"){
    console.log(course + " " + username)
    console.log(username + " is a CSE student");
}

let username = "Rita";
let username1 = "Gita";
let username2 = "Sita";
let username3 = "Mita";
let course = "Web Development";
greet(username, course);
greet(username1, course);
greet(username2);
greet(username3, course);

function sum(a,b,c,d){
let e = a + b + c + d;
return e;
}
let returnval = sum(4,8,2,1);
console.log(returnval);