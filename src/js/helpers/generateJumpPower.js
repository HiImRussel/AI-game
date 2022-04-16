import { AI_DATA, getClosest } from "../store.js";
import getRandomBetween from "./getRandomBetween.js";

const generateJumpPower = (distanceData) => {
    if (AI_DATA.length === 0) return parseFloat(Math.random() * 1).toFixed(2);

    const jumpData = getClosest(distanceData.between, distanceData.direction);

    if (!jumpData) return parseFloat(Math.random() * 1).toFixed(2);

    const dataDiff =
        parseFloat(jumpData.success.distanceToJump.between).toFixed(2) /
        parseFloat(distanceData.between).toFixed(2);

    let jumpAfterDif =
        dataDiff * parseFloat(jumpData.success.jumpPower).toFixed(2);
    if (jumpAfterDif > 1) {
        jumpAfterDif = 1;
    }

    return getRandomBetween(
        jumpAfterDif,
        parseFloat(jumpData.success.jumpPower).toFixed(2)
    );
};

export default generateJumpPower;
