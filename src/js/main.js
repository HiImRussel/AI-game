import generateBlock from "./generateBlock.js";
import generateHeroes from "./hero.js";
import { heroJump } from "./heroMoves.js";
import restartGame from "./restartGames.js";

const initApp = () => {
    generateHeroes();
    generateBlock();

    const jumpButton = document.getElementById("hero-jump");
    const generateBlockButton = document.getElementById("generate-block");
    const resetButton = document.getElementById("reset");

    jumpButton.addEventListener("click", heroJump);
    generateBlockButton.addEventListener("click", generateBlock);
    resetButton.addEventListener("click", restartGame);
};

initApp();
