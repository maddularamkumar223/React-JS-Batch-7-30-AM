let arrow = () => {
  console.log("I am a arrow function");
};
arrow();

let arrow1 = () => console.log("I am a arrow 1 function");
arrow1();

let arrow2 = ($) => console.log("I am a arrow 2 function");
arrow2();

let arrow3 = (username) => console.log(username);
arrow3("Ram");

let arrow4 = ($) => "I am a arrow 4 function";
let value = arrow4();
console.log(value);

let arrow5 = () => {
  return "I am a arrow 5 function";
};
console.log(arrow5());

// ! Higher Order Function

let cal = (a, b, operation) => operation(a, b);

let add = (a, b) => console.log(a + b);
let sub = (a, b) => console.log(a - b);

cal(10, 20, add);
cal(10, 20, sub);


let bank = (amount,transactions)=> transactions(amount)

let debit = (amount) => console.log(10000-amount)
let credit = (amount) => console.log(10000+amount)

bank(1000,credit)
bank(1000,debit)




currency(1,dollar)
currency(1,euro)
