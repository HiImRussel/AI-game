const getRandomBetween = (min, max) => {
    let jumpPower = 0;
    if (min > max) {
        jumpPower = parseFloat(Math.random() * (min - max + 1) + max).toFixed(
            2
        );
    } else {
        jumpPower = parseFloat(Math.random() * (max - min + 1) + min).toFixed(
            2
        );
    }

    if (jumpPower > 1) {
        jumpPower = 1;
    }

    return jumpPower;
};

export default getRandomBetween;
