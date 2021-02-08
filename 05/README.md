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
let userInfos: any = {
  id: 1,
  name: 'Dupont',
  pseudo: 'babar59
}
userInfos = "quelque chose" // OK!
```

Faille avec any:

```
let inputData: any
inputData = true
console.log(typeof inputData)  // boolean

let inputAge: number
inputAge = inputData  // OK
```

## [Type Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)

Avec Unknown, TS défini un type comme étant inconnu.
Comme le type, Unknown accepte tous les types.
Pour pouvoir l'utiliser, il faut d'abord vérifier le type.

```
let inputData: unknown
inputData = true
console.log(typeof inputData)  // boolean

let inputAge: number
inputAge = inputData  // Impossible d'assigner le type unknow au type number

------------------
inputData = 20
let inputAge: number
inputAge = inputData  // Impossible d'assigner le type unknow au type number
```

Unknow refuse tout en bloc.
Pour l'utiliser, nous avons besoin d'une condition pour vérifier le type. Si c'est true => le type vérifié est attribué à la variable.

```
if (typeof inputData === 'number') {
  // inputData est maintenant de Type number
  inputAge = inputData  // OK
}
```

A privilégier par rapport à any.

## [Type Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)

Void est égal au contraire de any, soit l'absence de type.

Une fonction retournant une valeur définit le type de la valeur retournée par inférence ou attribution.
Une fonction qui ne retourne rien définit un type void pour Undefined.

Privilégier l'inférence. TS choisit lui-même le bon type.
Pas de return => void

Pour éviter les problèmes, laisser TS choisir le type (inférence) !

## [Type Function](https://www.typescriptlang.org/docs/handbook/functions.html#typing-the-function)

Le Type Function => générique (doit être une fonction).

Types bien spécifiques : doit être une fonction explicite => (param: type) => return type.

```
function gift(num: number) {
  return num + 3;
}

gift(10); // 13
console.log(typeof gift(10));

let age: Function;      // Pas assez explicite
age = gift;
console.log(age(23))  // 26
```

Pour être plus spécifique, il faut typer les arguments et le return. Méthode vivement recommandée.

```
let age: (num: number) => number;
age = gift;

```

## [Paramètres facultatifs et par défaut](https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters)

```
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob") // error: manque un args
let result2 = buildName("Bob", "Sinclar", "Junior") // error: 2 args attendu, 3 reçu
```

Pas de problème en JS. Les args manquants ou en trop sont juste ignorés.

```
function buildName(firstName: string, lastName ?: string) {
  return firstName + " " + lastName;
}
```

Avec '?' on précise à TS que l'args est facultatif.

```
function buildName(firstName: string, lastName ?: string) {
  return firstName + " " + lastName;
}

if (lastname) return firstName + " " + lastName;
else return firstName;
```

On peut définir une valeur par défaut:

```
function buildName(firstName: string, lastName = 'Smith') {
  return firstName + " " + lastName;
}
let result = buildName('Bob')                       // Bob Smith
let result = buildName('Bob', undefined)            // Bob Smith
let result = buildName('Bob', undefined, 'salut')   // error!
let result = buildName('Bob', 'Adams')              // Bob Adams
```

Définir d'abord les paramètres obligatoires puis les facultatifs. En revanche, les params par défaut peuvent être placés en premier.

## [Type Rest](https://www.typescriptlang.org/docs/handbook/functions.html#rest-parameters)

## Callback function Type

## Union Types

## Aliases

## Literal Types

## [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)

## [Type Null et Undefined](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined)

## [Type Assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)
