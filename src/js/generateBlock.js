import { heroData } from "./config.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";

const renderPlatformHeight = (hero) => {
    const rootContainer = document.getElementById("root-canvas");
    const max = getElementPositionFromBottom(hero) + heroData.maxJump - 50;
    let min = getElementPositionFromBottom(hero) - 100;

    if (min < 20) {
        min = 20;
    }

    let height = Math.floor(Math.random() * (max - min + 1)) + min;

    if (height > rootContainer.offsetHeight * 0.8) {
        height = rootContainer.offsetHeight * 0.8;
    }

    return height;
};

export const generatePaddingBlock = () => {
    const rootContainer = document.getElementById("root-canvas");
    const paddingBlock = document.createElement("div");

    paddingBlock.classList.add("padding-element");
    rootContainer.appendChild(paddingBlock);
};

export const generateFirstBlock = () => {
    const rootContainer = document.getElementById("root-canvas");
    const platform = document.createElement("div");

    platform.classList.add("platform");
    rootContainer.appendChild(platform);
};

const generateBlock = () => {
    const hero = document.querySelector(".hero");
    const lastPlatform = Array.from(
        document.querySelectorAll(".platform")
    ).pop();
    const rootContainer = document.getElementById("root-canvas");

    const platform = document.createElement("div");
    platform.classList.add("platform");
    platform.style.left =
        lastPlatform.offsetLeft + 50 + lastPlatform.offsetWidth;

    platform.style.height = renderPlatformHeight(hero);

    rootContainer.appendChild(platform);
};

export default generateBlock;
