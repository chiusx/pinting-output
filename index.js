//TASK1

let a = 3;
let b = 5;
let c;
let result =
    `
let a = 3;
let b = 5;
let c;
----------
a + b = ${a + b}
a - b = ${b - a}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b = ${a += b}
a -= b = ${a -= b}
a *= b = ${a *= b}
a /= b = ${a /= b}
a %= b = ${a %= b}
a == b = ${a == b}
a != b = ${a != b}
a > b = ${a > b}
a < b = ${a < b}
!a && !c = ${!a && !c}
!a || !c = ${!a || !c}
`;

console.log(result);


//TASK2
let first_name = "Shane"
let last_name = "Chiu"
let email = "xxxx@algonquinlive.com"
// Interpolation using backticks
let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

console.log(output);
