

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://raw.githubusercontent.com/leparan-felix/ramen-rating-app/main/images/naruto.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://raw.githubusercontent.com/leparan-felix/ramen-rating-app/main/images/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://raw.githubusercontent.com/leparan-felix/ramen-rating-app/main/images/kojiro.jpg", rating: 3, comment: "Good, but not the best." }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; 

    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <h3>${ramen.name}</h3>
        <p>Restaurant: ${ramen.restaurant}</p>
        <p>Rating: ${ramen.rating || 'N/A'}</p>
        <p>Comment: ${ramen.comment || 'N/A'}</p>
    `;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById('name'),
            restaurant: document.getElementById('restaurant'),
            image: document.getElementById('image'),
            rating: document.getElementById('rating'),
            comment: document.getElementById('comment'),
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset(); 
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);