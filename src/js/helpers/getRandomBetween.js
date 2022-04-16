const getRandomBetween = (min, max) => {
    if (min > max)
        return parseFloat(Math.random() * (min - max + 1) + max).toFixed(2);

    return parseFloat(Math.random() * (max - min + 1) + min).toFixed(2);
};

export default getRandomBetween;
