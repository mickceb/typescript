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

## Classes - Private, Public, Protected, Readonly

## Readonly

## Interfaces

## Interfaces avec les classes

## Propriétés et méthodes en Static

## Classes abstraites
