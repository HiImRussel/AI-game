import getElementPositionFromBottom from "./getElementPositionFromBottom.js";

const calculateDistanceBetween = (element, platform) => {
    const OX_distance =
        platform.offsetLeft - (element.offsetLeft + element.offsetWidth);
    const OY_distance =
        platform.offsetHeight - getElementPositionFromBottom(element);

    const distance = {
        OX: OX_distance,
        OY: OY_distance,
    };

    return distance;
};

export default calculateDistanceBetween;
