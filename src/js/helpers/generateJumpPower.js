import { AI_DATA, getClosest } from "../store.js";

const generateJumpPower = (distanceData) => {
    if (AI_DATA.length === 0) return parseFloat(Math.random() * 1).toFixed(2);

    const jumpData = getClosest(distanceData.between, distanceData.direction);

    if (!jumpData) return parseFloat(Math.random() * 1).toFixed(2);

    if (distanceData.between > jumpData.between) {
        if (jumpData.jumpPower < 1) {
            return (
                parseFloat(Math.random() * 1).toFixed(2) + jumpData.jumpPower
            );
        } else {
            return jumpData.jumpPower;
        }
    } else if (distanceData.between === jumpData.between) {
        jumpData.jumpPower;
    } else {
        return jumpData.jumpPower - 0.05;
    }
};

export default generateJumpPower;
