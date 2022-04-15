import generateBlock, {
    generateFirstBlock,
    generatePaddingBlock,
} from "./generateBlock.js";
import generateHeroes from "./hero.js";
import { heroJump } from "./heroMoves.js";

const restartGame = () => {
    const rootCanvas = document.getElementById("root-canvas");
    const resetButton = document.getElementById("reset");

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
