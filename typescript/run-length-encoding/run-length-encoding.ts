export default class RunLengthEncoding {
    static encode(str: string): string {
        return str.replace(/(.)\1+/g, (match, ...groups) => `${match.length}${groups[0]}`)
    }

    static decode(str: string): string {
        return str.replace(/(\d+)(.)/g, (_, ...groups) => groups[1].repeat(groups[0]));
    }
}
