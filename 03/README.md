# Typescript - Les premiers pas en TS

## C'est quoi
```
function getLowerCaseString(arg) {
  return arg.toLowerCase()
}
// UnCaught TYpeError: Cannot read property 'toLowerCase' of undefined
```
En Typescript, on précise le TYPE d'argument à passer à la fonction et l'argument doit être correct. On évite ainsi d'avoir l'eereur au moment du lancement de la fonction.

Typescript doit être compilé en JS pour être compris par le browser. Il nous alerte des erreurs au moment de l'écriture et du compilage du code.

> Exemple : je veux manger une pizza 4 fromages. Si, lorsque j'en commande une je ne précise le TYPE (4 fromages) alors le livreur (compiler) ne saura pas laquelle m'apporter - risque d'erreur.

## JS vs TS + compiler
```
[sudo] npm i -g typescript

npx tsc
```
Exemple : 
```
*** script.js ***
const form = document.getElementById('signupForm')
const firstname = document.getElementById('firstname')
const age = document.getElementById('age')

function gift(age) {
  return Number(age) + 3
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (age.value < 18) console.log('inscription refusé')
  else console.log(`
  Bienvenue ${firstname.value}.
  Vous avez ${age.value} ans.
  Vous aurez droit à un cadeau quand vous aurez ${gift(age.value)}
  `)
})
```

Lancer le compiler : `tsc script.ts -w` => compilé en ES5.

```
*** script.ts ***
const form = document.getElementById('signupForm')
const firstname = document.getElementById('firstname') as HTMLInputElement
const age = document.getElementById('age') as HTMLInputElement

function gift(age: number) {
  return Number(age) + 3
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (+age.value < 18) console.log('inscription refusé')
  else console.log(`
  Bienvenue ${firstname.value}.
  Vous avez ${age.value} ans.
  Vous aurez droit à un cadeau quand vous aurez ${gift(+age.value)} ans.
  `)
})
```

## Var, Const et Let

`const` et `let` => portée block.
```
const PI = Math.PI
const API_KEY = 'aZerTyuiOP'
```
Il faut obligatoirement initialiser les `const` contraireemnt aux `let`.

## Types stricts vs Dynamiques - Inference / Assignation

TS utilise les types stricts, par assignation ou inférence (automatique).
En JS les types sont dynamiques (définition à l'éxécution du code).

```
// Inference
let machin                :any
let firstname = 'Martin'  :string,
let age = 45              :number,
let isAdult = true        :boolean

// Assignation
let firstname: string = 'Roger'
let age: number = 56
let isAdult: boolean = true

// Vérifier type en JS
const sum = (val1, val2) => {
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    return val1 + val2
  }
  return new Error("Impossible de calculer")
}

// En TS
const sum = (val1: number, val2: number) => {
  return val1 + val2
}
```
