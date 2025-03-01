/* eslint-disable no-undef */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographId = urlParams.get("id");
const menuChoice = document.querySelector(".choice");


// Permet de récupérer les données du photographe et des médias
async function getPhotographers() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    return data;
}

// Affiche le header de la page du photographe
// Affiche le bandeau en bas de la page avec le prix du photographe et le nombre de likes total
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


// Affiche les médias du photographe
// Permet d'afficher la lightbox
function displayMedia(media) {

    const mediaSections = document.querySelector(".photograph-medias-container");
    let totalLikes = 0;

    const lightbox = document.querySelector(".lightbox");
    lightbox.textContent = "";


    media.forEach(media => {
        if (media.photographerId == photographId) {

            const mediaModel = mediaFactory(media);
            const mediaDOM = mediaModel.getMediaDOM();
            mediaSections.appendChild(mediaDOM);
            lightboxFactory(media, lightbox);

            totalLikes += mediaModel.likes;
        }
    });

    // Permet d'afficher le nombres de likes total
    const total_likes = document.getElementById("total_likes");
    total_likes.textContent = totalLikes;

    // Appel la fonction pour ajouter un like, retirer un like, mettre à jour le nombre de likes total
    addLike();

    // Appel la fonction pour afficher la lightbox
    let mediaArticle = document.querySelector(".photograph-medias-container");
    for (let i = 0; i < mediaArticle.children.length; i++) {
        mediaArticle.children[i].children[0].addEventListener("click", () => {
            currentMedia(i + 1);
            displayLightbox();
        });
        mediaArticle.children[i].children[0].addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                currentMedia(i + 1);
                displayLightbox();
            }
        });
        mediaArticle.addEventListener("keypress", function (event) {
            if (event.key === "Escape") {
                closeLightbox();
            } else if (event.key === "ArrowRight") {
                plusMedia(1);
            } else if (event.key === "ArrowLeft") {
                plusMedia(-1);
            }
        });
    }
}

// Permet d'ajouter un like
// Permet de retirer un like
// Permet de mettre à jour le nombre de likes total
function addLike() {

    const likeButton = document.querySelectorAll(".button-like");
    const total_likes = document.getElementById("total_likes");
    likeButton.forEach(e => {
        e.addEventListener("click", () => {
            const likeNumber = e.querySelector(".likes");
            if (e.classList.contains("liked")) {
                likeNumber.textContent--;
                e.classList.remove("liked");
                total_likes.textContent--;
            } else {
                likeNumber.textContent++;
                e.classList.add("liked");
                total_likes.textContent++;
            }
        });
        e.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                const likeNumber = e.querySelector(".likes");
                if (e.classList.contains("liked")) {
                    likeNumber.textContent--;
                    e.classList.remove("liked");
                    total_likes.textContent--;
                } else {
                    likeNumber.textContent++;
                    e.classList.add("liked");
                    total_likes.textContent++;
                }
            }
        });
    });
}

// Permet de filtrer les médias
// en mode focus on peut changer de filtre grâce aux fleches directionnelles
// en mode focus on peut ouvrir le menu déroulant avec shift + espace, et naviguer dedans avec les fleches directionnelles et valider avec entrée

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


// Active les fonctions
async function display() {
    const { photographers, media } = await getPhotographers();
    displayData(photographers);
    displayMedia(media);
    filterMedia(media);
    menuChoice.addEventListener("change", () => {
        filterMedia(media);
    });
}

display(); 
