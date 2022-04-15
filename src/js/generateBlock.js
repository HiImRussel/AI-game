import { heroData } from "./config.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";

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

    platform.style.height =
        Math.floor(
            Math.random() *
                (getElementPositionFromBottom(hero) + heroData.maxJump - 20 + 1)
        ) + 20;

    rootContainer.appendChild(platform);
};

export default generateBlock;
