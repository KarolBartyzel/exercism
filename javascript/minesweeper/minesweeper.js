function calcAdjacentBombsCount(rows, rowIndex, columnIndex) {
    const rowLength = rows.length;
    const columnLength = rows[0].length;

    const square = {
        left: Math.max(columnIndex - 1, 0),
        top: Math.max(rowIndex - 1, 0),
        right: Math.min(columnIndex + 1, columnLength - 1),
        bottom: Math.min(rowIndex + 1, rowLength - 1)
    };

    return rows
        .slice(square.top, square.bottom + 1)
        .reduce((acc, row) => {
            return acc + row
                .split('')
                .slice(square.left, square.right + 1)
                .filter((cell) => cell === '*')
                .length
        }, 0);
}

export function annotate(rows) {
    return rows.map((row, rowIndex) => {
        return row
            .split('')
            .map((cell, columnIndex) => {
                if (cell === '*') {
                    return '*';
                }
                return calcAdjacentBombsCount(rows, rowIndex, columnIndex) || ' ';
            })
            .join("");
    });
}
