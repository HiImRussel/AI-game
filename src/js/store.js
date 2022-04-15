export const AI_DATA = [];

export const saveDataToStore = (data) => {
    AI_DATA.push(data);
    console.log(AI_DATA);
};

export const getSuccessJumps = () => {
    return AI_DATA.filter((data) => data.isJumpSuccess);
};

const filterJumpsForDirection = (elemets, direction) => {
    return elemets.filter(
        (element) => element.distanceToJump.direction === direction
    );
};

export const getClosest = (distance, direction) => {
    const successJumps = filterJumpsForDirection(getSuccessJumps(), direction);
    const distances = successJumps.map((jump) => jump.between);

    if (distances.length === 0) return false;

    const output = distances.reduce((prev, curr) =>
        Math.abs(curr - distance) < Math.abs(prev - distance) ? curr : prev
    );

    console.log("taken_data_from_AI");

    return successJumps.find((jump) => jump.between === output);
};
