let names: string
let speed: number = 25
let isLoading: boolean
let age: number|string

/* ---------------- */

let colors: string[] = []
colors.push('red')
console.log(colors)

let infos: (string|number|boolean)[] = []
infos.push('dupont', true, 40)
console.log(infos)

/* ---------------- */

let number: {
  firstname: string;
  age: number;
  isLoggedIn: boolean;
}

number = {
  firstname: 'Dupont',
  age: 20,
  isLoggedIn: true
}

console.log('age :',number.age)

/* ---------------- */

let numbers = {
  firstname: 'Dupont',
  age: 60,
  isLoggedIn: true
}

console.log(typeof numbers.age)

/* ---------------- */

let info: [string, number]
info = ['salut', 25]
console.log(info)

info[1] = 125
info.push(3456)
console.log(info)