import { heroData } from "./config.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";

const renderPlatformHeight = (hero) => {
    const max = getElementPositionFromBottom(hero) + heroData.maxJump - 50;
    const min = getElementPositionFromBottom(hero) - 100;

    const height = Math.floor(Math.random() * (max - min + 1)) + min;

    return height;
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
