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
};

export default restartGame;
