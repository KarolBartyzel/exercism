//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kind() {
        const { a, b, c } = this;
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Triangle inequality rule broken.');
        }

        if (a === b && b === c) {
            return 'equilateral';
        }
        if (a === b || b === c || a === c) {
            return 'isosceles';
        }

        return 'scalene';
    }
}
