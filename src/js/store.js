export const AI_DATA = [];

export const saveDataToStore = (data) => {
    AI_DATA.push(data);
};

const getSuccessJumps = () => {
    return AI_DATA.filter((data) => data.isJumpSuccess);
};

const getFailedJumps = () => {
    return AI_DATA.filter((data) => !data.isJumpSuccess);
};

const filterJumpsForDirection = (elemets, direction) => {
    return elemets.filter(
        (element) => element.distanceToJump.direction === direction
    );
};

export const matchValues = (array, distance) => {
    return array.reduce((prev, curr) =>
        Math.abs(curr - distance) < Math.abs(prev - distance) ? curr : prev
    );
};

export const getClosest = (distance, direction) => {
    const successJumps = filterJumpsForDirection(getSuccessJumps(), direction);
    const failJumps = filterJumpsForDirection(getFailedJumps(), direction);
    const distancesSuccess = successJumps.map(
        (jump) => jump.distanceToJump.between
    );
    const distancesFail = failJumps.map((jump) => jump.distanceToJump.between);

    if (distancesSuccess.length === 0 || distancesFail.length === 0)
        return false;

    const outputSuccess = matchValues(distancesSuccess, distance);
    const outputFail = matchValues(distancesFail, distance);

    return {
        success: successJumps.find(
            (jump) => jump.distanceToJump.between === outputSuccess
        ),
        fail: failJumps.find(
            (jump) => jump.distanceToJump.between === outputFail
        ),
    };
};
