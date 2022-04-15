import { heroData } from "./config.js";
import generateBlock from "./generateBlock.js";
import calculateDistanceBetween from "./helpers/calculateDistancseBetween.js";
import generateJumpPower from "./helpers/generateJumpPower.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";
import restartGame from "./restartGames.js";
import { saveDataToStore } from "./store.js";

//to do poprawa w generateJump - na teraz nie poprawne generowanie wartości
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
    let finishedJumpHeroes = 0;

    heroes.forEach((hero) => {
        const heroWidth = hero.offsetWidth;
        const distanceData = calculateDistanceBetween(hero, nextPlatform);
        const jumpPower = generateJumpPower(distanceData);
        const initData = {
            left: hero.offsetLeft,
            bottom: getElementPositionFromBottom(hero),
            distanceToJump: distanceData,
            isJumpSuccess: false,
            jumpPower: jumpPower,
        };
        let leftPosition = hero.offsetLeft;
        let bottomPositon = getElementPositionFromBottom(hero);
        let topJumpPos = 0;
        let stop = false;

        const interval = setInterval(() => {
            if (
                bottomPositon === nextPlatformPositions.bottom &&
                leftPosition + heroWidth > nextPlatformPositions.left &&
                leftPosition <
                    nextPlatformPositions.left + nextPlatform.offsetWidth
            ) {
                finishedJumpHeroes += 1;
                stop = true;
                initData.isJumpSuccess = true;
                clearInterval(interval);
                saveDataToStore(initData);
            }

            if (!stop) {
                if (
                    leftPosition + heroWidth <= nextPlatformPositions.left ||
                    bottomPositon >= nextPlatformPositions.bottom
                ) {
                    leftPosition += 0.5;
                    hero.style.left = leftPosition;
                }

                if (topJumpPos <= heroData.maxJump * jumpPower) {
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
            }

            if (finishedJumpHeroes === aliveHeroes && aliveHeroes > 0) {
                paddingElement.style.left = paddingElement.offsetLeft + 150;
                rootContainer.scrollLeft = rootContainer.scrollLeft + 150;
                generateBlock();
                heroJump();
                finishedJumpHeroes = 0;
            }

            if (aliveHeroes === 0) {
                restartGame();
            }
        }, 10);
    });
};
