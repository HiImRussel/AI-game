import { AI_DATA, getClosest } from "../store.js";
import getRandomBetween from "./getRandomBetween.js";

const generateForDirection = (
    jumpData,
    dataDiff,
    lowestPower,
    highestPower
) => {
    if (lowestPower > 1) {
        lowestPower = parseFloat(jumpData.fail.jumpPower).toFixed(2);
    }
    if (highestPower > 1) {
        highestPower = parseFloat(jumpData.success.jumpPower).toFixed(2);
    }

    let jumpPower = parseFloat(
        getRandomBetween(lowestPower, highestPower)
    ).toFixed(2);

    if (lowestPower > highestPower) {
        jumpPower = parseFloat(getRandomBetween(0, highestPower)).toFixed(2);
    }

    if (dataDiff === 1) {
        jumpPower = parseFloat(jumpData.success.jumpPower).toFixed(2);
    }

    return jumpPower;
};

const generateJumpPower = (distanceData) => {
    if (AI_DATA.length === 0) return parseFloat(Math.random() * 1).toFixed(2);

    const jumpData = getClosest(distanceData.between, distanceData.direction);

    if (!jumpData) return parseFloat(Math.random() * 1).toFixed(2);

    const dataDiff =
        parseFloat(jumpData.success.distanceToJump.between).toFixed(2) /
        parseFloat(distanceData.between).toFixed(2);

    let lowestPower = parseFloat(jumpData.fail.jumpPower).toFixed(2) * dataDiff;
    let highestPower =
        parseFloat(jumpData.success.jumpPower).toFixed(2) * dataDiff;

    let jumpPower = 0;

    if (distanceData.direction === "up") {
        jumpPower = generateForDirection(
            jumpData,
            dataDiff,
            lowestPower,
            highestPower
        );
    } else {
        jumpPower = generateForDirection(
            jumpData,
            dataDiff,
            highestPower,
            lowestPower
        );
    }

    console.log(distanceData);
    console.log(jumpData);
    console.log(jumpPower);

    return jumpPower;
};

export default generateJumpPower;
