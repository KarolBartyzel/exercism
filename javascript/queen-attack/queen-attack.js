export class QueenAttack {
    constructor(positions = { white: [0, 3], black: [7, 3] }) {
        if (positions.white[0] === positions.black[0] && positions.white[1] === positions.black[1]) {
            throw new Error('Queens cannot share the same space');
        }

        this.white = positions.white;
        this.black = positions.black;

        this.map = [...Array(8).keys()]
            .map((row, rowIndex) => [...Array(8).keys()]
                .map((col, colIndex) =>
                    rowIndex === this.white[0] && colIndex === this.white[1]
                        ? 'W' : rowIndex === this.black[0] && colIndex === this.black[1]
                        ? 'B' : '_')
            );

        this.toString = this.toString.bind(this);
        this.canAttack = this.canAttack.bind(this);
    }

    toString() {
        console.log(this.map[0]);
        return this.map.map((row) => row.join(' ')).join('\n') + '\n';
    }

    canAttack() {
        return this.white[0] === this.black[0] || this.white[1] === this.black[1] || Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]);
    }
}
