# Typescript - Les classes et les interfaces

POO en TS

## [Les classes](https://www.typescriptlang.org/docs/handbook/classes.html)

Class = un Plan => (Instanciation) => Objet

```
class Invoice {
  client: string;
  product: string;
  price: number;

  constructor(client: string, product: string, price: number) {
    this.client = client;
    this.product = product;
    this.price = price;
  }
}

const invoice1 = new Invoice("Dora", "Template", 45);
const invoice2: Invoice = {client: 'Nora', product: 'SEO', price: 200}

```

## Type Array Object d'une instance

```
let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray); // [](2)
```

## Héritage et polymorphisme

Un Objet a des caractéristiques (Propriétés et Méthodes).
L'instance de cet objet hérite de toutes ses caractéritiques.

```
class Mother {
  name: string;
  hair: string;
  eyes: number;

  constructor(n: string, h: string, e: number) {
    this.name = n;
    this.hair = h;
    this.eyes = e;
  }

  speak() {
    console.log(`Je suis ${this.name} et j'ai des cheveux ${this.hair}`);
  }
}

class Children extends Mother {
  speak() {
    console.log(`I am ${this.name} and I have ${this.hair} hair.`);
  }

  speakMotherTong() {
    super.speak();
  }
}

const person1 = new Mother("Tintin", "roux", 2);        // Type Mother
const child1 = new Children("Mario", "black", 2);       // Type Children
const child2: Mother = new Children('Toto', 'blond', 1) // Type Mother
```

L'objet `child2` ayant un `Type Mother` il ne peut pas appeler la méthode `speakMotherTong()` bien qu'il ait été instancié avec la `class Children`.

## Classes - Private, Public, Protected, Readonly

Access modifiers :
Public est la condition par défaut, les paramètres sont accessibles depuis l'extérieur.
Private, seulement accessible via les getters et setters.
Protected, accessible uniquement depuis les classes qui en héritent.

```
class Mother2 {
  constructor(
    private name: string,
    public hair: string,
    protected eyes: number
  ) {}

  // Getter
  getName() {
    return this.name;
  }
  // Setter
  setName(name: string) {
    this.name = name;
  }

  private speak() {
    console.log(`Je suis ${this.name} et j'ai des cheveux ${this.hair}`);
  }

  getSpeak() {
    return this.speak();
  }
}

class Children2 extends Mother2 {
  getEyes() {
    return this.eyes + " yeux";
  }
}

const child3 = new Children2("Marcel", "vert", 2);
console.log(child3.getName());
child3.setName("Maurice");
console.log(child3.getName());
child3.getSpeak();
console.log(child3.getEyes());
```

## Readonly

## Interfaces

## Interfaces avec les classes

## Propriétés et méthodes en Static

## Classes abstraites
