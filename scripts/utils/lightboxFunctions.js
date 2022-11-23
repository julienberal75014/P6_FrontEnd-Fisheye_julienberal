/*const lightbox = document.getElementsByClassName('.lightbox');
const lightboxContent = document.getElementsByClassName('.lightbox-text');

function displayLightbox(id) {

    lightbox.style.display = "block";
    displayLightboxMedia(id);
}

function closeLightbox() {

    lightbox.style.display = "none";
    lightboxContent.textContent = "";

}

function displayLightboxMedia(id) {

    const media = document.querySelector(`#media-${id}`);
    const mediaClone = media.cloneNode(true);

    if (mediaClone.querySelector('video')) {
        mediaClone.querySelector('video').play();
    } else if (mediaClone.querySelector('img')) {
        mediaClone.querySelector('img').style.display = "block";
    }

    lightboxContent.appendChild(mediaClone);
    lightboxContent.textContent = "";

}

*/
