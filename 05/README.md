# Typescript - Les types de base 2

## [Type Enum](https://www.typescriptlang.org/docs/handbook/basic-types.html#enum)

Enum n'existe pas en JS. Il permet de nommer des ensembles de valeurs d'une façon numérique. Facilite la lecture du code.

```
if ( user.level === 1) // le 1 ne représente rien de concret

if (user.level === Level.ADMIN) // plus explicite
```

Exemple :

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

Faille avec `any`:

```
let inputData: any
inputData = true
console.log(typeof inputData)  // boolean

let inputAge: number
inputAge = inputData  // OK
```

## [Type Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)

Avec Unknown, TS défini un type comme étant inconnu.
Comme le type, `Unknown` accepte tous les types.
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

`Unknow` refuse tout en bloc.
Pour l'utiliser, nous avons besoin d'une condition pour vérifier le type. Si c'est true => le type vérifié est attribué à la variable.

```
if (typeof inputData === 'number') {
  // inputData est maintenant de Type number
  inputAge = inputData  // OK
}
```

A privilégier par rapport à `any`.

## [Type Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)

Void est égal au contraire de `any`, soit l'absence de type.

Une fonction retournant une valeur définit le type de la valeur retournée par inférence ou attribution.
Une fonction qui ne retourne rien définit un type `void` pour Undefined.

Privilégier l'inférence. TS choisit lui-même le bon type.
Pas de return => void

Pour éviter les problèmes, laisser TS choisir le type (inférence) !

## [Type Function](https://www.typescriptlang.org/docs/handbook/functions.html#typing-the-function)

Le `Type Function` => générique (doit être une fonction).

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

Les paramètres obligatoires, facultatifs et par défaut ont une chose en commun : ils font référence à un paramètre à la fois.
Parfois, on souhaite travailler avec plusieurs paramètres (paramètres groupés), ou bien on ne connaît pas le nombre de paramètre qu'une fonction exige.

En JS, on a la variable argument:

```
let colors = function () {
  console.log(arguments);
};
colors("green", "red", "orange");
// Arguments(3) ["green", "red", "orange"]
```

En TS:

```
let colors = function (arg1: string, ...restOfColors: string[]) {
  console.log(...restOfColors);
};
colors("green", "red", "orange", "purple", "black");
// red, orange, purple, black
```

Le 2nd argument `...restOfColors` est un `array` de `string`, il accepte plusieurs arguments mais uniquement s'ils ont pour type `string`.

```
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}

let buildNameFun: (fnam: string, ...rest: string[]) => string = buildName
```

La variable `buildNameFun` est une `function` acceptant plusieurs arguments. Le 1st doit être de type `string` de même que tous les suivants (`...rest`).

## Callback function Type

```
function gift(age: number, sum: (arg: number) => void) {
  const memberAge = age + 3;
  sum(memberAge);
}

gift(40, (num) => console.log(num));
```

La fonction `gift` accepte 2 arguments : le 1st `age` est de type `number` et le 2nd est de type `function` acceptant un argument de type `number` et ne retournant rien (`void`).

## Union Types

```
function doSomething(arg1: number | string, arg2: number | string) {
  //
  //
}
```

la fonction `doSomething` accepte 2 arguments de type `number` ou `string`.
Pour éviter les `errors`, dans le corps de la fonction il faut recourir aux conditions.

```
function doSomething(arg1: number | string, arg2: number | string) {
  let result
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + " " + arg2
  } else {
    result = arg1.toString() + arg2.toString()
  }

  return result
}
console.log(doSomething(10, 20));           // 30
console.log(doSomething("Hello", "World")); // Hello World
console.log(doSomething("Hello", 20));      // Hello20
```

## [Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

Imaginons avoir 2 fonctions acceptant des arguments de type `string | number | boolean`. Il y a répétition dans le code.

```
type NumOrStr = number|string|boolean

let func1: NumOrStr
let func2: NumOrStr
```

exemple:

```
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
```

## [Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html)

Le `Literal Type` précise et le `Type` et la `value`.

```
type GetResultFormat = "getStringValue"|"getSquare"

function total(arg1: number, arg2: number, totalVersion: GetResultFormat ) {
  let result;

  if (totalVersion === "getStringValue") {
    result = arg1.toString() + arg2.toString;
  } else {
    result = arg1 + arg2;
  }
}

const totalOne = total(20, 10, "getStringValue");
console.log(totalOne); // 2010

const totalTwo = total(20, 10, "getString"); // TS Error: L'argument de type '"getString"' n'est pas attribuable au paramètre de type '"getStringValue"'.
console.log(totalOne); // 30
```

## [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)

(cas rares)

Le Type `never` est relativement nouveau dans TS. Il représente le type de valeurs qui ne se produisent jamais.
Il est assignable à chaque type. Mais aucun type n'est assignable à un type `never`, même pas `any`.
Contrairement au type `vois` qui ne s'applique que dans le cas d'une fonction qui retourne `undefined`, `never` indique que la fonction ne retourne jamais rien, même pas `undefined`.

Il est utile lorsque que l'on souhaite capturer une erreur via `throw` ou dans le cas de boucles infinies.

Cas d'usage => capter les erreurs

```
type AcceptedValues = string | number;

function format(value: AcceptedValues) {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value.toString();
  } else {
    const verifyCases: never = value; // TS Error
  }
}

format("Hello");
format(true); // TS Error: L'argument de type 'boolean' n'est pas attribuable au paramètre de type 'AcceptedValues'.
```

## [Type Null et Undefined](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined)

En TS, les types `undefined` et `null` ont en fait leurs types nommés respectivement `undefined` et `null`. Tout comme `void`, ils ne sont pas extrêmement utiles en eux-mêmes:

```
let u: undefined = undefined;
let n: null = null;

undefined + 200 // NaN

const users: any = {}
users.age // Undefined
```

Le Type `undefined` a une value `undefined`
Le Type `null` a une value `undefined`, sauf si l'on précise sa value a `null`.

On peut assigner une value `undefined` ou `null` a une variable de type `number` (seulement si le mode `strictNullChecks` dans le tsconfig.json n'est pas activé).

## [Type Assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)

`Type assertions` a 2 syntaxes.

1. la syntaxe `as`:

```
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;Try
```

2. la syntaxe `angle-bracket`:

```
let someValue: unknown = "this is a string";

let strLength: number = (<string>someValue).length;
```

Les deux syntaxes sont équivalentes.Mais seule la syntaxe `as` est autorisée lorsque l'on fait du JSX.
