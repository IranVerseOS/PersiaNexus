function renderHero(hero) {

    return `

    <div class="hero-card">

        <div class="hero-image">

            <img src="${hero.image}" alt="${hero.name}">

        </div>

        <div class="hero-info">

            <h2>${hero.name}</h2>

            <h4>${hero.title}</h4>

            <p>${hero.description}</p>

            <div class="hero-stats">

                <span>⚡ ${hero.power}</span>

                <span>🌟 ${hero.element}</span>

                <span>🏆 ${hero.level}</span>

            </div>

        </div>

    </div>

    `;

}
