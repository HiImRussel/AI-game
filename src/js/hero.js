import { heroNumbers } from "./config.js";

const generateHeroes = () => {
    const rootContainer = document.getElementById("root-canvas");

    for (let i = 0; i < heroNumbers; i++) {
        const heroBox = document.createElement("div");
        heroBox.classList.add("hero");

        rootContainer.appendChild(heroBox);
    }
};

export default generateHeroes;
