export default function accumulate<T, U>(collection: T[], operation: (element: T) => U): U[] {
    const res = [];
    for (const elem of collection) {
        res.push(operation(elem));
    }
    return res;

    // return collection.map(operation);
}
