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

const matchValues = (array, distance) => {
    return array.reduce((prev, curr) =>
        Math.abs(curr - distance) < Math.abs(prev - distance) ? curr : prev
    );
};

export const getClosest = (distance, direction) => {
    const successJumps = filterJumpsForDirection(getSuccessJumps(), direction);
    const failedJumps = filterJumpsForDirection(getFailedJumps(), direction);
    const distancesSuccess = successJumps.map(
        (jump) => jump.distanceToJump.between
    );
    const distancesFailed = failedJumps.map(
        (jump) => jump.distanceToJump.between
    );

    if (distancesSuccess.length === 0) return false;

    const outputSuccess = matchValues(distancesSuccess, distance);
    const outputFailed = matchValues(distancesFailed, distance);

    return {
        success: successJumps.find(
            (jump) => jump.distanceToJump.between === outputSuccess
        ),
        failure: failedJumps.find(
            (jump) => jump.distanceToJump.between === outputFailed
        ),
    };
};
