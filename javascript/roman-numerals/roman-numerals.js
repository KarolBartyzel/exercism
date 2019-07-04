//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const x = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: '1'
};

function findHighestDividable(number) {
    const possibleComponents = Object.keys(x);
    for (let component of possibleComponents) {

    }
}

function nums(number) {
    const possibleComponents = Object.keys(x);
    return
}

export const toRoman = (number) => {


    if (number > 1000) {
        return 'M' + toRoman(number - 1000);
    }
    if (number > 500) {

    }
};
