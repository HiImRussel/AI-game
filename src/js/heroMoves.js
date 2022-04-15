import { heroData } from "./config.js";
import generateBlock from "./generateBlock.js";
import calculateDistanceBetween from "./helpers/calculateDistancseBetween.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";
import { saveDataToStore } from "./store.js";

export const heroJump = () => {
    const rootContainer = document.getElementById("root-canvas");
    const paddingElement = document.querySelector(".padding-element");
    const heroes = document.querySelectorAll(".hero");
    const nextPlatform = Array.from(
        document.querySelectorAll(".platform")
    ).pop();
    const nextPlatformPositions = {
        left: nextPlatform.offsetLeft,
        bottom: nextPlatform.offsetHeight,
    };
    const resetBtn = document.getElementById("reset");
    let aliveHeroes = heroes.length;

    heroes.forEach((hero) => {
        const heroWidth = hero.offsetWidth;
        const initData = {
            left: hero.offsetLeft,
            bottom: getElementPositionFromBottom(hero),
            distanceToJump: calculateDistanceBetween(hero, nextPlatform),
            isJumpSuccess: false,
        };
        let leftPosition = hero.offsetLeft;
        let bottomPositon = getElementPositionFromBottom(hero);
        let topJumpPos = 0;

        const interval = setInterval(() => {
            if (
                bottomPositon >= nextPlatformPositions.bottom ||
                leftPosition + heroWidth < nextPlatformPositions.left ||
                leftPosition >=
                    nextPlatformPositions.left + nextPlatform.offsetWidth
            ) {
                if (
                    bottomPositon === nextPlatformPositions.bottom &&
                    leftPosition + heroWidth > nextPlatformPositions.left &&
                    leftPosition <
                        nextPlatformPositions.left + nextPlatform.offsetWidth
                ) {
                    generateBlock();
                    initData.isJumpSuccess = true;
                    saveDataToStore(initData);
                    paddingElement.style.left = paddingElement.offsetLeft + 150;
                    rootContainer.scrollLeft = rootContainer.scrollLeft + 150;
                }

                if (
                    leftPosition + heroWidth <= nextPlatformPositions.left ||
                    bottomPositon >= nextPlatformPositions.bottom
                ) {
                    leftPosition += 0.5;
                    hero.style.left = leftPosition;
                }

                if (topJumpPos <= heroData.maxJump) {
                    bottomPositon += 1;
                    hero.style.bottom = bottomPositon;

                    topJumpPos += 1;
                } else if (bottomPositon > 0) {
                    bottomPositon -= 1;
                    hero.style.bottom = bottomPositon;
                } else {
                    saveDataToStore(initData);
                    aliveHeroes -= 1;
                    hero.remove();
                    if (aliveHeroes === 0) {
                        resetBtn.classList.remove("-hidden");
                    }
                    clearInterval(interval);
                }
            } else {
                clearInterval(interval);
            }
        }, 10);
    });
};
