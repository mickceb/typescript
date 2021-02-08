# Typescript - Les types de base 2

## [Type Enum](https://www.typescriptlang.org/docs/handbook/basic-types.html#enum)

Enum n'existe pas en JS. Il permet de nommer des ensembles de valeurs d'une façon numérique. Facilite la lecture du code.
```
if ( user.level === 1) // le 1 ne représente rien de concret

if (user.level === Level.ADMIN) // plus explicite
```
exemple :
```
enum Level {
  ADMIN,          // 0 (valeur par défaut) ou définir une valeur '= 1'
  MODERATOR,      // 1
  SUPPORT,        // 2
  USER_READ_ONLY  // 3
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
```

## [Type Any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)

Via any TS n'impose aucun type particulier. On peut y stocker tous les types.
A utiliser avec modération, par exemple quand on ne sait pas quel type de data on récupère d'une API.
```
let anyData: any = 'hello'
console.log(typeof anyData) // string
let anyData: any = 12
console.log(typeof anyData) // number
let anyData: any = true
console.log(typeof anyData) // boolean

// cet array peut contenir n'importe quel type de valeur
let anyDataArray: any[] = []
```


## [Type Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)

## [Type Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)

## Type Function

## Paramètres facultatifs et par défaut

## Type Rest

## Callback function Type

## Union Types

## Aliases

## Literal Types

## [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)

## [Type Null et Undefined](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined)

## [Type Assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)