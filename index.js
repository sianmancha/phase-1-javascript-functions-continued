function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
};

function wrapAdjective(visualFlair = "*") {
    const innerFunction = function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
    return innerFunction;
}