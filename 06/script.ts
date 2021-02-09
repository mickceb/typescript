/*  */

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

/* const clientName = document.getElementById("name") as HTMLSpanElement
const listProduct = document.getElementById("product") as HTMLSpanElement
const listPrice = document.getElementById("price") as HTMLSpanElement

clientName.innerText = invoice1.client;
listProduct.innerText = invoice1.product;
listPrice.innerText = invoice1.price.toString(); */

// Type Array Object d'une instance
let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray); //
