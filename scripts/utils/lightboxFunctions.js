/* eslint-disable no-unused-vars */

function displayLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "block";
}

function closeLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "none";
}

let mediaIndex = 1;

// Permet d'afficher la lightbox
function showMedia(n) {
    let i;
    const medias = document.getElementsByClassName("lightbox_media");

    if (n > medias.length) {
        mediaIndex = 1;
    }
    if (n < 1) {
        mediaIndex = medias.length;
    }
    for (i = 0; i < medias.length; i++) {
        medias[i].style.display = "none";
    }
    medias[mediaIndex - 1].style.display = "flex";
}

// Permet d'afficher la photo cliquée
function currentMedia(n) {
    showMedia(mediaIndex = n);
}

// Permet de passer à la photo suivante
function plusMedia(n) {
    showMedia(mediaIndex += n);
}

// Permet de fermer la lightbox, de passer à la photo suivante, de passer à la photo précédente
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowRight") {
        plusMedia(1);
    } else if (event.key === "ArrowLeft") {
        plusMedia(-1);
    }
});





