document.addEventListener('DOMContentLoaded', () => {
    // Create and insert header dynamically
    const headerHTML = `
      <section id="header">
        <img id="logo" src="img/Logo1.png" alt="Logo">
        <div>
          <ul id="nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
              <a href="cart.html" class="line">
                <i class="bi bi-cart-dash-fill"></i>
                <span id="cart-notification" class="cart-notification">0</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <div id="nav-icon">
            <i class="bi bi-bag"></i>
            <i style="font-size: 27px" id="menu" class="bi bi-list"></i>
          </div>
        </div>
      </section>
    `;
  
    // Insert header if container exists
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      headerContainer.innerHTML = headerHTML;
    }
  
    // Update cart notification
    updateCartNotification();
  });