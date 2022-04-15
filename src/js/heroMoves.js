import { heroData } from "./config.js";
import generateBlock from "./generateBlock.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";

export const heroJump = () => {
    const rootContainer = document.getElementById("root-canvas");
    const heroes = document.querySelectorAll(".hero");
    const nextPlatform = Array.from(
        document.querySelectorAll(".platform")
    ).pop();
    const nextPlatformPositions = {
        left: nextPlatform.offsetLeft,
        bottom: nextPlatform.offsetHeight,
    };

    heroes.forEach((hero) => {
        let leftPosition = hero.offsetLeft;
        let bottomPositon = getElementPositionFromBottom(hero);
        let topJumpPos = 0;

        const interval = setInterval(() => {
            if (
                bottomPositon >= nextPlatformPositions.bottom ||
                leftPosition < nextPlatformPositions.left
            ) {
                leftPosition += 0.5;
                hero.style.left = leftPosition;

                if (topJumpPos <= heroData.maxJump) {
                    bottomPositon += 1;
                    hero.style.bottom = bottomPositon;

                    topJumpPos += 1;
                } else if (bottomPositon > 0) {
                    bottomPositon -= 1;
                    hero.style.bottom = bottomPositon;
                } else {
                    clearInterval(interval);
                }
            } else {
                clearInterval(interval);
            }
        }, 10);
    });

    generateBlock();
    rootContainer.scrollLeft = rootContainer.scrollLeft + 400;
};
