import generateBlock from "./generateBlock.js";
import generateHeroes from "./hero.js";
import { heroJump } from "./heroMoves.js";
import restartGame from "./restartGames.js";

export const gameData = {
    generation: 0,
    alive: 0,
    jumps: 0,
    maxJumps: 0,
};

export const printGameData = () => {
    const generationNumber = document.getElementById("generation-number");
    const aliveNumber = document.getElementById("alive-number");
    const jumpsNumber = document.getElementById("jumps-number");
    const maxJumpsNumber = document.getElementById("max-jumps-number");

    generationNumber.innerHTML = gameData.generation;
    aliveNumber.innerHTML = gameData.alive;
    jumpsNumber.innerHTML = gameData.jumps;
    maxJumpsNumber.innerHTML = gameData.maxJumps;
};

const initApp = () => {
    printGameData();
    generateHeroes();
    generateBlock();

    const jumpButton = document.getElementById("hero-jump");
    const resetButton = document.getElementById("reset");

    jumpButton.addEventListener("click", heroJump);
    resetButton.addEventListener("click", restartGame);
};

initApp();
