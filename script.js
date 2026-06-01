const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];

  console.log(products)

// task 1 
// Filtrer produkter som koster 200kr eller mindre
const cheapProducts = products.filter(product => product.price <=200 )
console.log(cheapProducts)

// task 2
// Henter ut alle informasjonen fra name i objektet
const productName = products.map(product => product.name)
console.log(productName)

// task 3
// henter ut produktnavn fra der katerogien er electronics
const electronicsName = products.filter(product => product.category === `electronics`) /* her filtrer den først etter katerogi som er electronics */
.map(product => product.name);/* Her så henter den ut navnet fra products.name som ligger i katerogien electronics */
console.log(electronicsName)

// Task 4
// Sjekker om produktene koster mer en 1000. vis de koster mindre så får mann opp false og vis den koster mer så mann opp true
const expensiveProducts = products.map(product => product.price > 1000);
console.log(expensiveProducts)

// task 5 
// Regner ut totalprisen på alle produktene i arrayet. 
const totalPrice =  products.reduce((acc, currentValue) => acc + currentValue.price,0);
console.log(totalPrice)