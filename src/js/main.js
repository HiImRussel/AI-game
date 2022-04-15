import generateBlock, {
    generateFirstBlock,
    generatePaddingBlock,
} from "./generateBlock.js";
import generateHeroes from "./hero.js";
import { heroJump } from "./heroMoves.js";

const initApp = () => {
    generateHeroes();
    generateBlock();

    const rootCanvas = document.getElementById("root-canvas");
    const jumpButton = document.getElementById("hero-jump");
    const generateBlockButton = document.getElementById("generate-block");
    const resetButton = document.getElementById("reset");

    jumpButton.addEventListener("click", heroJump);
    generateBlockButton.addEventListener("click", generateBlock);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("-hidden");
        rootCanvas.innerHTML = "";
        generateFirstBlock();
        generateHeroes();
        generateBlock();
        generatePaddingBlock();
        rootCanvas.scrollLeft = 0;
    });
};

initApp();
