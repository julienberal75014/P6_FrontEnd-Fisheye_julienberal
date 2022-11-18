const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographId = urlParams.get('id');

async function getPhotographers() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    return data;
}


function displayData(photographers) {

    const photographerSections = document.querySelector(".photograph-header");

    photographers.forEach(photographer => {
        if (photographer.id == photographId) {
            const photographerModel = photographerHeader(photographer);
            const userCardDOM = photographerModel.getPhotographerHeaderDOM();
            photographerSections.appendChild(userCardDOM);

        }
    });

}

async function display() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}
display(); 
