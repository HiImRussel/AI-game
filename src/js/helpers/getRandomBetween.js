const getRandomBetween = (min, max) => {
    return parseFloat(Math.random() * (max - min + 1) + min).toFixed(2);
};

export default getRandomBetween;
