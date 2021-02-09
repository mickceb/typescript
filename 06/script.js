/*  */
// Les classes
var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice("Dora", "Template", 45);
var invoice2 = { client: "Nora", product: "SEO", price: 200 };
/* const clientName = document.getElementById("name") as HTMLSpanElement
const listProduct = document.getElementById("product") as HTMLSpanElement
const listPrice = document.getElementById("price") as HTMLSpanElement

clientName.innerText = invoice1.client;
listProduct.innerText = invoice1.product;
listPrice.innerText = invoice1.price.toString(); */
// Type Array Object d'une instance
var invoiceArray = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray); //
