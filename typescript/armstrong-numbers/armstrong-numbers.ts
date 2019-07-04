export default class ArmstrongNumbers {
    static isArmstrongNumber(num: number): boolean {
        const digits = num.toString().split('').map(Number);
        const sumOfPowers = digits.map((digit) => Math.pow(digit, digits.length)).reduce((acc, num) => acc + num);
        return sumOfPowers === num;
    }
}
