const PersiaNexusData = {

    async load(file) {

        try {

            const response = await fetch(`data/${file}`);

            console.log("Loading:", file);

            if (!response.ok) {
                throw new Error("File not found: " + file);
            }

            const result = await response.json();

            console.log("Loaded:", result);

            return result;

        } catch (error) {

            console.error(
                "PersiaNexus Error:",
                error
            );

            return null;

        }

    }

};


window.PersiaNexusData = PersiaNexusData;


console.log("PersiaNexus Data Loader Ready");
