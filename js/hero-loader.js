async function loadHeroes() {

    try {

        const response = await fetch("heroes.json");

        const data = await response.json();

        console.log("Heroes Loaded:", data);

    } catch (error) {

        console.error("Failed to load heroes:", error);

    }

}

loadHeroes();
