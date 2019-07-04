export default class RotationalCipher {
    private static shift(code: number, offset: number): number {
        const A = 65, Z = 90, a = 97, z = 122, mod = 26;
        return (code >= A && code <= Z) ? ((code - A + offset) % mod) + A : (code >= a && code <= z) ? ((code - a + offset) % mod) + a : code;
    }

    static rotate(msg: string, offset: number): string {
        return String.fromCharCode(...msg.split("").map((c: string) => this.shift(c.charCodeAt(0), offset)));
    }
}
