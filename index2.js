const ramens = [ 
    {name: "Nirvana Ramen", restaurant: "Miniso", image: "images/nirvana.jpg", rating: 5, comment: "Awesome!" },

    {name: "Kojiro Ramen", restaurant: "MG", image: "images/kojiro.jpg", rating: 4, comment: "Very good!" }, 

    {name: "Naruto Ramen", restaurant: "Clint", image: "images/naruto.jpg ", rating: 2, comment: "Uncooked!" },

    {name: "Gyukotsu Ramen", restaurant: "Fugo", image: "images/gyukotsu.jpg", rating: 3, comment: "Okay!" }, 

    {name: "Shoyu Ramen", restaurant: "Aquarius", image: `images/shoyu.jpg`, rating: 5, comment: "Yum!" }
];


function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}
 

function handleClick(ramen) {
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
    document.getElementById('ramen-rating').textContent = ramen.rating;
    document.getElementById('ramen-comment').textContent = ramen.comment;
}



function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value
        };
        ramens.push(newRamen);
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}


document.addEventListener("DOMContentLoaded", main);
