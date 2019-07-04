export default class Triangle {
    private sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    kind() : String {
        const [a, b, c] = this.sides;
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
