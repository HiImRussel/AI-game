import { generateAiData, importAiData } from "./ai-data.js";
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

export let isStopped = false;

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
    const generateAiDataButton = document.getElementById("js-generate-ai-data");
    const importAiDataButton = document.getElementById("js-import-ai-data");
    const stopButton = document.getElementById("js-stop-game");

    jumpButton.addEventListener("click", heroJump);
    resetButton.addEventListener("click", restartGame);
    generateAiDataButton.addEventListener("click", generateAiData);
    importAiDataButton.addEventListener("click", importAiData);
    stopButton.addEventListener("click", () => {
        isStopped = !isStopped;

        stopButton.innerText = isStopped ? "Start" : "Stop";
    });
};

initApp();
