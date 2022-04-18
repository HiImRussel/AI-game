import { AI_DATA, getClosest, matchValues } from "../store.js";

const generateJumpPower = (distanceData) => {
    if (AI_DATA.length === 0) return parseFloat(Math.random() * 1).toFixed(2);

    const jumpData = getClosest(distanceData.between, distanceData.direction);

    if (!jumpData) return parseFloat(Math.random() * 1).toFixed(2);

    const dataDiffSuccess =
        parseFloat(jumpData.success.distanceToJump.between).toFixed(2) /
        parseFloat(distanceData.between).toFixed(2);

    const dataDiffFail =
        parseFloat(jumpData.fail.distanceToJump.between).toFixed(2) /
        parseFloat(distanceData.between).toFixed(2);

    const failPower =
        parseFloat(jumpData.fail.jumpPower).toFixed(2) * dataDiffFail;
    const successPower =
        parseFloat(jumpData.success.jumpPower).toFixed(2) * dataDiffSuccess;

    const closestValue = matchValues(
        [
            jumpData.fail.distanceToJump.between,
            jumpData.success.distanceToJump.between,
        ],
        distanceData.between
    );

    const jumpPower =
        jumpData.success.distanceToJump.between === closestValue
            ? successPower
            : failPower;

    console.log(distanceData);
    console.log(jumpData);
    console.log(jumpPower);

    return jumpPower;
};

export default generateJumpPower;
