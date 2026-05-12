//FIRST STEP

const name_product = prompt("Enter a name of product: ") 
const price = Number(prompt("Enter a price of product: "))
const id = Number(prompt("Enter your cc in order to update your product in list under your name: "))

if (isNaN(price) || (isNaN(id))) {
    alert("Error: only accept numbers.")
} else {
    console.log(`That's true!, your cc is ${id} the nombre of product ${name_product} and the price is ${price}`)
}

const products = {
    "id": id,
    "name_product": name_product,
    "price": price
}

console.log(products);

//SECOND STEP

const chosses = new Set

chosses.add("Tecnology");
chosses.add("Office");
chosses.add("Home");

//THIRTH STEP

const number = new Map

number.set(1, "Laptop")
number.set(2, "Mouse")
number.set(3, "Keyboard")
number.set(4, "Desk")
number.set(5, "Chair")

console.log("=== OBJECT ====");

for (let product in products) {
    console.log(`${product}: ${products[product]}`)
}

console.log("=== SET ===");

for (let chosse of chosses) {
    console.log(chosse)
}

console.log("=== MAP ===");

number.forEach((valor, clave) => { 
    console.log(`Clave: ${clave} | Valor: ${valor}`);
});
