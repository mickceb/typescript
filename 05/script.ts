/*
 enum Level {
  ADMIN,
  MODERATOR,
  SUPPORT,
  USER_READ_ONLY
 }

 const users = {
   pseudo: "Batman",
   level: Level.SUPPORT
 }

 if (users.level === Level.SUPPORT) {
   console.log(`
   Bienvenue ${users.pseudo}
   Vous travaillez au service support
   ${Level.SUPPORT}
   `)
 }

 enum colors {
   bleu,
   rouge,
   vert
 }

 let x = colors[1]
 console.log(x) 

let anyData: any = 'hello'
console.log(typeof anyData) // string


let inputData: unknown;
inputData = 30;
console.log(typeof inputData); // boolean

let inputAge: number;
inputAge = inputData; // Impossible d'assigner le type unknow au type number


function gift(age: number) {
  return age + 3;
}
console.log(typeof gift(40));


function gift(num: number) {
  return num + 3;
}

gift(10); // 13
console.log(typeof gift(10));

let age: (num: number) => number;
age = gift;
console.log(age(23)); // 26



let colors = function (arg1: string, ...rest: string[]) {
  console.log(...rest);
};
colors("green", "red", "orange", "purple", "black");


function gift(age: number, sum: (arg: number) => void) {
  const memberAge = age + 3;
  sum(memberAge);
}

gift(40, (num) => console.log(num));


function doSomething(arg1: number | string, arg2: number | string) {
  let result;
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + " " + arg2;
  } else {
    result = arg1.toString() + arg2.toString();
  }

  return result;
}

console.log(doSomething(10, 20)); // 30
console.log(doSomething("Hello", "World")); // Hello World
console.log(doSomething("Hello", 20)); // Hello20

*/

type NumOrStr = number | string;
type ObjIduser = { id: number; userName: NumOrStr };
type ObjInvoice = { name: string; price: number };

const currentUser = { id: 745623, userName: "Dupont" };

let data: NumOrStr;
let userId: NumOrStr;

const welcome = (userName: number | string) => {
  console.log("Bienvenue", userName);
};

welcome("Dupont");

const getProfileData = (user: ObjIduser) => {
  console.log(`
    id: ${user.id}
    userName: ${user.userName}
  `);
};

getProfileData(currentUser);

const invoice = (productName: ObjInvoice, user: ObjIduser) => {
  console.log(`
    Produit: ${productName.name}
    Prix: ${productName.price}
    Id Client: ${user.id}
    Nom du client: ${user.userName}
  `);
};

let productDetails = {
  name: "Formation JS",
  price: 149,
};

invoice(productDetails, currentUser);
