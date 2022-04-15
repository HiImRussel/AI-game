import { heroData } from "./config.js";
import generateBlock from "./generateBlock.js";
import getElementPositionFromBottom from "./helpers/getElementPositionFromBottom.js";

export const heroJump = () => {
    const heroes = document.querySelectorAll(".hero");

    heroes.forEach((hero) => {
        let leftPosition = hero.offsetLeft;
        let bottomPositon = getElementPositionFromBottom(hero);
        let topJumpPos = 0;

        const interval = setInterval(() => {
            leftPosition += 5;
            hero.style.left = leftPosition;

            if (topJumpPos <= heroData.maxJump) {
                bottomPositon += 10;
                hero.style.bottom = bottomPositon;

                topJumpPos += 10;
            } else if (bottomPositon > 0) {
                bottomPositon -= 10;
                hero.style.bottom = bottomPositon;
            } else {
                clearInterval(interval);
            }
        }, 50);
    });

    generateBlock();
};
