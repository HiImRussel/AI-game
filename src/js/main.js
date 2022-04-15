import generateBlock from "./generateBlock.js";
import generateHeroes from "./hero.js";
import { heroJump } from "./heroMoves.js";

const initApp = () => {
    generateHeroes();
    generateBlock();

    const jumpButton = document.getElementById("hero-jump");
    const generateBlockButton = document.getElementById("generate-block");

    jumpButton.addEventListener("click", heroJump);
    generateBlockButton.addEventListener("click", generateBlock);
};

initApp();
