class Squares {
    public squareOfSum: number;
    public sumOfSquares: number;
    public difference: number;

    constructor(N: number) {
        this.squareOfSum = this._squareOfSum(N);
        this.sumOfSquares = this._sumOfSquares(N);
        this.difference = this._difference(this.squareOfSum, this.sumOfSquares);
    }

    private _squareOfSum(N: number): number {
        const sum = Array.from(Array(N).keys())
            .reduce((sum, number) => sum + number + 1, 0);

        return Math.pow(sum, 2);
    }

    private _sumOfSquares(N: number): number {
        return Array.from(Array(N).keys())
            .reduce((sum, number) => sum + Math.pow(number + 1, 2), 0)
    }

    private _difference(squareOfSum: number, sumOfSquares: number): number {
        return squareOfSum - sumOfSquares;
    }
}

export default Squares;
