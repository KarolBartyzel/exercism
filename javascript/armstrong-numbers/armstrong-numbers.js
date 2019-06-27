export function validate(number) {
    const digits = number.toString().split('').map(Number);
    const sumOfPowers = digits.map((digit) => Math.pow(digit, digits.length)).reduce((acc, num) => acc + num);
    return sumOfPowers === number;
};
