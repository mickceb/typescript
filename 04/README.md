# Typescript - Exercices

## 1
* créer une var names qui n'accepte qu'un type String
* créer une var speed qui n'accepte que les numbers et initialisé avec la valeur 25
*créer une var isLoading qui n'accepte que les types booleans.
* créer une var age qui n'accepte que les types number ou string.
```
let names: string
let speed: number = 25
let isLoading: boolean
let age: number|string
```

## 2
* créer une var colors qui est un array de strings. Ensuite, push() la valeur red + console.log(colors)
* créer une var infos qui accepte un array de strings, numbers ou boolean. Ensuite, push('dupont', true, 40).
```
let colors: string[] = []
colors.push('red')
console.log(colors)

let infos: (string|number|boolean)[] = []
infos.push('dupont', true, 40)
console.log(infos)
```

## 3
* créer une var number qui ne peut être qu'un objet avec les props suivantes : firstname: dupont, age: 20, isLoggedIn: true.
```
let number: Object {
  firstname: string;
  age: number;
  isLoggedIn: boolean;
}

number = {
  firstname: 'Dupont',
  age: 20,
  isLoggedIn: true
}

console.log(number.age)
```

## 4
* créer une var number qui ne peut être qu'un objet avec les props suivantes : firstname: dupont, age: 20, isLoggedIn: true, via l'assignation.
```
// Assignation
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

console.log(number.age)
```

## 5
* Via inférence.
```
let numbers = {
  firstname: 'Dupont',
  age: 20,
  isLoggedIn: true
}

console.log('age :',numbers.age)
```

## 6
Un array est également un objet. { } === [ ]
Donc on peut assigner une valeur [ ] à un object ayant été défini en TS en tant que tel.


## 7
* créer une var infos qui est un tuple de 2 valeurs, string et number.
```
let info: [string, number]
```