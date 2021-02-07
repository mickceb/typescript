# Typescript - Les types de base 1

## Array
On y stocke ce que l'on veut (string, number, boolean, { }, [ ]).

```
// Assignation
let colors: string[] || let colors: Array(string)
let numbers: number[] = [1, 2, 12, 8.9, 1234]
numbers[5] = 34
numbers.push(45)

// Types multiples
let newArray = ['string', 12]
let values: any[]
values = [
  'Bonjour', 
  true, 
  12, 
  {
    id: 34, 
    member: true, 
    hobbies: ['peinture', 'musique']
  }
]
```

## Tuple
Permet de définir un tableau avec un nombre fixe d'éléments - length - dont les types sont connus, mais pas nécessairement les mêmes.
```
let x: [string, number]
x = ['hello', 20] // OK
x = ['hello', 20, 'bonjour'] // error
x.push('bonjour') // OK -> la méthode push() déroge à la règle.

let level: (string | number)[] => level est un array qui accepte des values de type string et number. Ce n'est pas un tuple.
```

## Object
Type non primitif, c-à-d type autre que number, string, boolean, symbol, null or undefined.
TS attribut par inférence un type aux propriétés en fonction des valeurs renseignées.
```
// Crée un objet car
let car = {
  color: 'red',
  date: 2020,
  speed: 500
}

// son Type Object
let car: {
  color: string;
  date: number;
  speed: number;
}
```
Impossible de rajouter des propriétés à la volée.