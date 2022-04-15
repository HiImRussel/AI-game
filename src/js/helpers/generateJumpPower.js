import { AI_DATA, getClosest } from "../store.js";
import getRandomBetween from "./getRandomBetween.js";

const generateJumpPower = (distanceData) => {
    if (AI_DATA.length === 0) return parseFloat(Math.random() * 1).toFixed(2);

    const jumpData = getClosest(distanceData.between, distanceData.direction);

    if (!jumpData) return parseFloat(Math.random() * 1).toFixed(2);

    if (distanceData.between === jumpData.success.distanceToJump.between) {
        jumpData.jumpPower;
    } else {
        return getRandomBetween(
            jumpData.failure.jumpPower,
            jumpData.success.jumpPower
        );
    }
};

export default generateJumpPower;
