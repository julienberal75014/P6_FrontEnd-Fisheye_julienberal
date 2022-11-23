function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait, id } = data;

    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const user = document.createElement('div')
        user.classList.add('user');
        user.setAttribute('role', 'presentation');
        user.setAttribute('aria-label', 'photographer presentation');
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        link.setAttribute('aria-label', `Voir la page de ${name}`);
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.setAttribute("role", "img")
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const p = document.createElement('p');
        p.textContent = city + ", " + country;
        const p2 = document.createElement('p');
        p2.textContent = tagline;
        const p3 = document.createElement('p');
        p3.textContent = price + "€/jour";

        article.appendChild(user);
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(p3);
        user.appendChild(img);
        user.appendChild(h2);
        link.appendChild(user);
        return (article);
    }

    return { name, city, country, tagline, price, picture, getUserCardDOM };
}


