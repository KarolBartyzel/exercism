export function keep<T>(collection: T[], predicate: (elem: T) => boolean): T[] {
    const res = [];
    for (const elem of collection) {
        if (predicate(elem)) {
            res.push(elem);
        }
    }
    return res;

    // return collection.filter(predicate);
}

export function discard<T>(collection: T[], predicate: (elem: T) => boolean): T[] {
    const res = [];
    for (const elem of collection) {
        if (!predicate(elem)) {
            res.push(elem);
        }
    }
    return res;

    // return collection.filter((elem: T) => !predicate(elem));
}
