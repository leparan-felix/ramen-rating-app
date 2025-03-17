// Ramen data
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "/home/leparan-sopia/Development/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "/home/leparan-sopia/Downloads/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "/home/leparan-sopia/Downloads/naruto.jpg", rating: 3, comment: "Rich broth!" }
];

// Function to display ramen images
function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });

    // Automatically display the first ramen
    if (ramens.length > 0) handleClick(ramens[0]);
}

// Function to show ramen details
function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

// Function to add new ramen
function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };
        
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

// Initialize app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure DOM is loaded before running script
document.addEventListener("DOMContentLoaded", main);
