import { borderThiccness } from "../config.js";

const getElementPositionFromBottom = (element) => {
    const rootContainer = document.getElementById("root-canvas");

    return (
        rootContainer.offsetHeight -
        element.offsetTop -
        borderThiccness -
        element.offsetHeight
    );
};

export default getElementPositionFromBottom;
