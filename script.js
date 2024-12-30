// Function to create a product card using setAttribute
function createProduct(src, name, price = "$ Price") {
  // Create the main container for the product
  let imgBox = document.createElement("div");
  let productImg = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  // Set attributes and content
  imgBox.setAttribute("class", "img-box");
  productImg.setAttribute("class", "product-img");
  img.setAttribute("src", src);
  h3.setAttribute("id", "info");
  h3.innerText = name;
  p.innerText = price;

  // Append all the elements in the correct order
  productImg.appendChild(img);
  productImg.appendChild(h3);
  productImg.appendChild(p);
  imgBox.appendChild(productImg);

  // Add event listener to imgBox for navigation and data storage
  imgBox.addEventListener("click", () => {
    window.location.href = "product.html"; // Navigate to product detail page
    localStorage.setItem("image", src); // Store image URL
    localStorage.setItem("name", name); // Store product name
    localStorage.setItem("price", price); // Store product price
  });

  return imgBox; // Return the created product element
}

// Function to render products into a specific container
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  // Clear the container before appending new products
  container.innerHTML = '';

  // Loop through products and create each product card
  products.forEach((product) => {
    const productCard = createProduct(product.image, product.name, product.price);
    container.appendChild(productCard);
  });
}

// Products data
// Render shoes in the shoe-container

const shoes = [
  {
    image: "img/shoe-1.avif",
    name: "Black Sneakers",
    price: "$100",
  },
  {
    image: "img/shoe-2.jpeg",
    name: "White Trainers",
    price: "$120",
  },
  {
    image: "img/shoe-3.avif",
    name: "Running Shoes",
    price: "$80",
  },
  {
    image: "img/shoe-4.avif",
    name: "Canvas Shoes",
    price: "$60",
  },
  {
    image: "img/shoe-6.avif",
    name: "Orange Sneakers",
    price: "$95",
  },
  {
    image: "img/shoe-5.avif",
    name: "Red shoes",
    price: "$95",
  },
  {
    image: "img/shoe-7.jpg",
    name: "black Loafers",
    price: "$95",
  },
];

//jackets
const jackets = [
  {
    image: "./img/hoodie/hoodie-1.jpg",
    name: "Hoodie1",
    price: "$100",
  },
  {
    image: "./img/hoodie/hoodie-2.jpeg",
    name: "Hoodie2",
    price: "$120",
  },
  {
    image: "./img/hoodie/hoodie-3.jpg",
    name: "Hoodie3",
    price: "$122",
  },
  {
    image: "./img/hoodie/hoodie-4.jpg",
    name: "Hoodie4",
    price: "$122",
  },
  {
    image: "./img/hoodie/hoodie-5.jpeg",
    name: "Hoodie5",
    price: "$122",
  },
  {
    image: "./img/hoodie/hoodie-6.jpg",
    name: "Hoodie6",
    price: "$122",
  },
  {
    image: "./img/hoodie/hoodie-7.jpg",
    name: "Hoodie7",
    price: "$122",
  },
  {
    image: "./img/hoodie/hoodie-8.jpeg",
    name: "Hoodie8",
    price: "$122",
  },


];

const newArrivals = [
  {
    image: "img/n8.jpg",
    name: "White Jacket",
    price: "$100",
  },
  {
    image: "img/n9.jpg",
    name: "Black Hoodie",
    price: "$90",
  },
  {
    image: "img/n10.jpg",
    name: "Casual Sneakers",
    price: "$75",
  },
  {
    image: "img/n11.jpg",
    name: "Denim Jeans",
    price: "$110",
  },
];

const Tshirts = [
  {
    image: "img/Tshirts/ts-10.jpeg",
    name: "T-Shirts",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-2.avif",
    name: "T-Shirt",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-3.avif",
    name: "T-Shirt01",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-5.jpeg",
    name: "T-Shirt02",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-6.jpeg",
    name: "T-Shirt03",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-7.jpg",
    name: "T-Shirt04",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-8.jpg",
    name: "T-Shirt05",
    price: " $ 110",
  },
  {
    image: "img/Tshirts/ts-9.jpg",
    name: "T-Shirt06",
    price: " $ 110",
  },
  
]

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("jackets-container", jackets);
  renderProducts("new-arrivals-container", newArrivals);
  renderProducts("shoe-container", shoes);
  renderProducts("tshirt-container", Tshirts);
});




// Navbar toggle functionality
const bar = document.getElementById("menu");
const close = document.getElementById("close");
const navbar = document.getElementById("nav");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
