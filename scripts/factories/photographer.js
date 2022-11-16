function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const user = document.createElement('div')
        user.classList.add('user');
        const link = document.createElement('a');
        link.href = "index.html";
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
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


