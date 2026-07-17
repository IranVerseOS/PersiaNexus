async function loadHeroes() {

    try {

        const response = await fetch("heroes.json");

        const data = await response.json();

        const container =
        document.getElementById("heroes-container");

        if (!container) return;

        container.innerHTML = "";

        data.heroes.forEach(hero => {

            container.innerHTML +=
            renderHero(hero);

        });

    }

    catch(error){

        console.error(error);

    }

}

loadHeroes();
