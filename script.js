let total = 0;
let count = 0;

function showLogin() {
    alert("Login feature coming soon!");
}

function addToCart(item, price) {
    total += price;
    count++;
    document.getElementById("cart-total").textContent = total;
    document.getElementById("cart-status").textContent = count + " item(s) in cart.";
}

function placeOrder() {
    if (total === 0) {
        alert("Your cart is empty! Please add items first.");
    } else {
        alert("Order placed successfully! Total amount: ₹" + total);
        total = 0;
        count = 0;
        document.getElementById("cart-total").textContent = "0";
        document.getElementById("cart-status").textContent = "Your cart is empty.";
    }
}