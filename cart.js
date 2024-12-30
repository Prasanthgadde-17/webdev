// Retrieve cart data from localStorage or initialize it
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render the cart items
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalQtyElement = document.getElementById("total-qty");
  const subtotalElement = document.getElementById("subtotal");

  if (!cartItemsContainer || !totalQtyElement || !subtotalElement) {
    console.error("Cart elements not found in the DOM!");
    return;
  }

  // Clear cart container
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
    totalQtyElement.textContent = "0";
    subtotalElement.textContent = "0.00";
    updateCartNotification();
    return;
  }

  let totalQty = 0;
  let subtotal = 0;

  cart.forEach((item, index) => {
    // Cart item container
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    // Product image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    // Details container
    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = `
      <h3>${item.name}</h3>
      <p>$${item.price.toFixed(2)}</p>
    `;

    // Controls container
    const controls = document.createElement("div");
    controls.className = "controls";

    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.addEventListener("click", () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(index, 1); // Remove item from cart
      }
      saveCart();
      renderCart();
    });

    const qtyDisplay = document.createElement("span");
    qtyDisplay.textContent = item.qty;

    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.addEventListener("click", () => {
      item.qty++;
      saveCart();
      renderCart();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1); // Remove item from cart
      saveCart();
      renderCart();
    });

    // Append controls
    controls.append(decreaseBtn, qtyDisplay, increaseBtn, removeBtn);

    // Append all elements
    cartItem.append(img, details, controls);
    cartItemsContainer.appendChild(cartItem);

    totalQty += item.qty;
    subtotal += item.price * item.qty;
  });

  totalQtyElement.textContent = totalQty;
  subtotalElement.textContent = subtotal.toFixed(2);

  updateCartNotification();
}

// Function to update the cart notification badge
function updateCartNotification() {
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const cartNotification = document.getElementById("cart-notification");

  if (cartNotification) {
    if (totalQty > 0) {
      cartNotification.style.display = "inline-block";
      cartNotification.textContent = totalQty;
    } else {
      cartNotification.style.display = "none";
    }
  }
}

// Checkout button functionality
document.getElementById("checkout-btn")?.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout!");
    // Add checkout logic here
  }
});

// Listen for the "productAdded" event
document.addEventListener("productAdded", (event) => {
  const product = event.detail;

  // Check if the product already exists in the cart
  const existingProduct = cart.find((item) => item.name === product.name);

  if (existingProduct) {
    existingProduct.qty += 1; // Increment quantity
  } else {
    cart.push(product); // Add new product
  }

  saveCart();
  renderCart();
});

// Initial render
renderCart();