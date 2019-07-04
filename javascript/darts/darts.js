export function solve(x, y) {
    const distanceFromCenter = Math.sqrt(x * x + y * y);
    if (distanceFromCenter <= 1) {
        return 10;
    }
    if (distanceFromCenter <= 5) {
        return 5;
    }
    if (distanceFromCenter <= 10) {
        return 1;
    }
    return 0;
};
