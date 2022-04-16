import getElementPositionFromBottom from "./getElementPositionFromBottom.js";

const calculateDistanceBetween = (element, platform) => {
    const OX_distance =
        platform.offsetLeft -
        (element.offsetLeft + element.offsetWidth) +
        platform.offsetWidth / 2;
    const OY_distance =
        platform.offsetHeight - getElementPositionFromBottom(element);
    const distanceBetween = Math.pow(OY_distance, 2) + Math.pow(OX_distance, 2);
    let direction =
        platform.offsetHeight >= getElementPositionFromBottom(element)
            ? "up"
            : "down";

    const distance = {
        OX: OX_distance,
        OY: OY_distance,
        between: distanceBetween,
        direction: direction,
    };

    return distance;
};

export default calculateDistanceBetween;
