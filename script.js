let cart = [];
let total = 0;

function showLogin() {
    alert("Login feature coming soon!");
}

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((c) => {
        const li = document.createElement("li");
        li.textContent = `\({c.item} - ₹\){c.price}`;
        cartList.appendChild(li);
    });
    document.getElementById("cart-total").textContent = total;
}