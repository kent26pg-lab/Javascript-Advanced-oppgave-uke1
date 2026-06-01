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
const cheapProducts = products.filter(product => product.price <=200 )
console.log(cheapProducts)

// task 2
const productName = products.map(product => product.name)
console.log(productName)

// task 3

const electronicsName = products.filter(product => product.category === `electronics`).map(product => product.name);
console.log(electronicsName)

// Task 4

const expensiveProducts = products.map(product => product.price > 1000);
console.log(expensiveProducts)