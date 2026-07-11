// =========================
// FoodExpress Script
// =========================

// Page Load
window.addEventListener("load", function () {
    alert("🍔 Welcome to FoodExpress!");
});

// Search Button
const searchBtn = document.querySelector("button");
const searchInput = document.querySelector("input");

searchBtn.addEventListener("click", function () {

    let food = searchInput.value.trim();

    if (food === "") {
        alert("Please enter a food item.");
    } else {
        alert("Searching for: " + food);
    }

});

// Order Now Buttons
const orderButtons = document.querySelectorAll("button");

orderButtons.forEach(function (btn) {

    if (btn.innerText === "Order Now") {

        btn.addEventListener("click", function () {

            alert("✅ Your order has been placed successfully!");

        });

    }

});

// Navigation Menu
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        alert("Opening " + this.innerText);

    });

});

// Image Hover Effect
const images = document.querySelectorAll("img");

images.forEach(function (img) {

    img.addEventListener("mouseover", function () {

        this.style.transform = "scale(1.08)";
        this.style.transition = "0.3s";

    });

    img.addEventListener("mouseout", function () {

        this.style.transform = "scale(1)";

    });

});

// Footer Year
const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML += `<p style="margin-top:10px;">Current Year : ${year}</p>`;

// Welcome Message
console.log("FoodExpress Loaded Successfully!");