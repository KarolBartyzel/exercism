//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function convert(digits, srcBase, destBase) {
    if (!Number.isInteger(srcBase) || srcBase < 2) {
        throw new Error('Wrong input base');
    }

    if (!Number.isInteger(destBase) || destBase < 2) {
        throw new Error('Wrong output base');
    }

    if (digits.length === 0 ||
        (digits.length > 1 && digits[0] === 0) ||
        digits.find((digit) => digit < 0 || digit >= srcBase)
    ) {
        throw new Error('Input has wrong format');
    }

    const decimalValue = digits.map((digit, index) => digit * Math.pow(srcBase, digits.length - index - 1)).reduce((acc, curr) => acc + curr, 0);
    const numberOfDestDigits = decimalValue !== 0 ? Math.floor(Math.log(decimalValue) / Math.log(destBase)) + 1 : 1;
    return [...Array(numberOfDestDigits).keys()]
        .map((digit) => Math.floor(decimalValue / Math.pow(destBase, digit)) % destBase)
        .reverse();
}
