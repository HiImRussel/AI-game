import generateBlock, {
    generateFirstBlock,
    generatePaddingBlock,
} from "./generateBlock.js";
import generateHeroes from "./hero.js";
import { heroJump } from "./heroMoves.js";
import { gameData, printGameData } from "./main.js";

const restartGame = () => {
    const rootCanvas = document.getElementById("root-canvas");
    const resetButton = document.getElementById("reset");

    if (gameData.jumps > gameData.maxJumps) {
        gameData.maxJumps = gameData.jumps;
    }
    gameData.generation += 1;
    gameData.jumps = 0;

    printGameData();

    resetButton.classList.add("-hidden");
    rootCanvas.innerHTML = "";
    generateFirstBlock();
    generateHeroes();
    generateBlock();
    generatePaddingBlock();
    rootCanvas.scrollLeft = 0;
    heroJump();
};

export default restartGame;
