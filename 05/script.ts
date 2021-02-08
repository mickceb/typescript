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
*/

function gift(num: number) {
  return num + 3;
}

gift(10); // 13
console.log(typeof gift(10));

let age: (num: number) => number;
age = gift;
console.log(age(23)); // 26
