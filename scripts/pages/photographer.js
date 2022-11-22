const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographId = urlParams.get('id');
const menuChoice = document.querySelector(".choice");

async function getPhotographers() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    return data;
}


function displayData(photographers) {

    const photographerSections = document.querySelector(".photograph-header");
    let headband_price = 0;

    photographers.forEach(photographer => {
        if (photographer.id == photographId) {
            const photographerModel = photographerHeader(photographer);
            const userCardDOM = photographerModel.getPhotographerHeaderDOM();
            photographerSections.appendChild(userCardDOM);

            headband_price += photographerModel.price;
        }
    });

    const headband_prices = document.getElementById("price");
    headband_prices.textContent = headband_price + "€ / jour";

}

function displayMedia(media) {

    const mediaSections = document.querySelector(".photograph-medias-container");
    let totalLikes = 0;

    media.forEach(media => {
        if (media.photographerId == photographId) {

            const mediaModel = mediaFactory(media);
            const mediaDOM = mediaModel.getMediaDOM();
            mediaSections.appendChild(mediaDOM);

            totalLikes += mediaModel.likes;
        }
    });

    const total_likes = document.getElementById("total_likes");
    total_likes.textContent = totalLikes;
}

function filterMedia(media) {

    switch (menuChoice.value) {

        case "popular":
            media.sort((a, b) => b.likes - a.likes);
            break;

        case "date":
            media.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;

        case "title":
            media.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    const mediaSections = document.querySelector(".photograph-medias-container");
    mediaSections.textContent = "";

    displayMedia(media);

}

async function display() {
    const { photographers, media } = await getPhotographers();
    displayData(photographers);
    displayMedia(media);
    menuChoice.addEventListener("change", () => filterMedia(media));
}
display(); 
