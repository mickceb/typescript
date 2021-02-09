/*

// Les classes
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
const invoice2: Invoice = { client: "Nora", product: "SEO", price: 200 };

const clientName = document.getElementById("name") as HTMLSpanElement
const listProduct = document.getElementById("product") as HTMLSpanElement
const listPrice = document.getElementById("price") as HTMLSpanElement

clientName.innerText = invoice1.client;
listProduct.innerText = invoice1.product;
listPrice.innerText = invoice1.price.toString();

// Type Array Object d'une instance
let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray); // [](2)

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Héritage et polymorphisme
var Mother = /** @class */ (function () {
    function Mother(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je suis " + this.name + " et j'ai des cheveux " + this.hair);
    };
    return Mother;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children.prototype.speak = function () {
        console.log("I am " + this.name + " and I have " + this.hair + " hair.");
    };
    Children.prototype.speakMotherTong = function () {
        _super.prototype.speak.call(this);
    };
    return Children;
}(Mother));
var person1 = new Mother("Tintin", "roux", 2); // Type Mother
var child1 = new Children("Mario", "black", 2); // Type Children
var child2 = new Children("Toto", "blond", 1); // Type Mother
// Public, Private & Protected
var Mother2 = /** @class */ (function () {
    function Mother2(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
    }
    // Getter
    Mother2.prototype.getName = function () {
        return this.name;
    };
    // Setter
    Mother2.prototype.setName = function (name) {
        this.name = name;
    };
    Mother2.prototype.speak = function () {
        console.log("Je suis " + this.name + " et j'ai des cheveux " + this.hair);
    };
    Mother2.prototype.getSpeak = function () {
        return this.speak();
    };
    return Mother2;
}());
var Children2 = /** @class */ (function (_super) {
    __extends(Children2, _super);
    function Children2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children2.prototype.getEyes = function () {
        return this.eyes + " yeux";
    };
    return Children2;
}(Mother2));
/* const child3 = new Children2("Marcel", "vert", 2);
console.log(child3.getName());
child3.setName("Maurice");
console.log(child3.getName());
child3.getSpeak();
console.log(child3.getEyes()); */
// Readonly
var Car = /** @class */ (function () {
    function Car(c, gears) {
        this.gears = gears;
        this.color = c;
    }
    Car.prototype.setColor = function (color) {
        this.color = color; // TS Error: Impossible d'effectuer une assignation à 'color', car il s'agit d'une propriété en lecture seule.
    };
    return Car;
}());
var ford = new Car("white", 4);
var greenColor = (ford.color = "green"); // TS Error: Impossible d'effectuer une assignation à 'color', car il s'agit d'une propriété en lecture seule.
var opel = new Car("blue", 5);
//console.log(opel); // color: 'blue, gears: 5
// Interfaces
var Person = /** @class */ (function () {
    function Person(n, e) {
        this.name = n;
        this.age = e;
    }
    Person.prototype.speak = function () {
        console.log("Je me pr\u00E9sente, je m'appelle " + this.name + " et j'ai " + this.age + " ans.");
    };
    return Person;
}());
var henri = new Person("Henri", 72);
console.log(henri);
var helen;
helen = {
    name: "Helen",
    age: 24,
    speak: function (a) {
        return a + " " + this.name;
    }
};
var talking = function (a, b) {
    return a.speak(b);
};
var result = talking(helen, "Je m'appelle");
console.log(result);
