export function encode(str) {
    const characters = str.split('');
    const groupedCharacters = characters.reduce((acc, curr) => {
        if (acc.length && curr === acc[acc.length - 1][0]) {
            acc[acc.length - 1].push(curr);
        }
        else {
            acc.push([curr]);
        }
        return acc;
    }, []);

    return groupedCharacters.map((group) => group.length > 1 ? `${group.length}${group[0]}` : group[0]).join('');
}

export function decode(str) {
    const parts = str.split(/(\d+)/g).filter((part) => part.length !== 0);
    if (parts.length === 1) {
        return parts[0];
    }

    let res = '';
    for (let i = 0; i < parts.length; i += 2) {
        const count = Number(parts[i]);
        const [firstCharacter, ...otherCharacters] = parts[i+1];
        res += `${firstCharacter.repeat(count)}${otherCharacters.join('')}`;
    }
    return res;
}
