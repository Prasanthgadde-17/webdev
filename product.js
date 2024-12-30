// product.js
let src = localStorage.getItem("image");
let name = localStorage.getItem("name");
let price = localStorage.getItem("price");
let desc = localStorage.getItem("description");

let detailimg = document.querySelector("#productImg");
let detailname = document.querySelector("#proname");
let detailprice = document.querySelector("#pricedetail");
let detaildesc = document.querySelector("#prodesc"); 

detailimg.setAttribute("src", src);
detailname.innerHTML = name;
detailprice.innerHTML = price;
detaildesc.innerHTML =
  "This Naruto-themed hoodie features a bold graphic print of the popular anime character. Made from comfortable fleece material, it offers warmth and a casual style. Perfect for fans of Naruto looking to showcase their love for the series."; 



  // script for cart functionality
  document.querySelector("button").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = {
      image: src,
      name: name,
      price: parseFloat(price.replace("$", "")),
      qty: 1,
    };
  
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.name === product.name);
  
    if (existingProduct) {
      existingProduct.qty += 1; // Increment quantity
    } else {
      cart.push(product); // Add new product
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  });
  