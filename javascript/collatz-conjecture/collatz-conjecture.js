export function steps(num, stepsCount = 0) {
    if (num < 1) {
        throw new Error('Only positive numbers are allowed');
    }

    if (num === 1) {
        return stepsCount;
    }

    return steps(num % 2 === 0 ? num / 2 : 3 * num + 1, stepsCount + 1);
};
