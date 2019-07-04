class Gigasecond {
    constructor(private _date: Date) {
        const TERAMILISECONDS = 1e12;
        this._date = new Date(_date.valueOf() + TERAMILISECONDS);
    };

    date() {
        return this._date;
    }
}

export default Gigasecond;
