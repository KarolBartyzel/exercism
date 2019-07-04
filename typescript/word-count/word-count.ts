class Words {
    count(sentence: string): Map<string, number> {
        const words = sentence
            .split(/\s+/g)
            .filter((word: string): boolean => word.length > 0)
            .map((word: string): string => word.toLowerCase());

        return words
            .reduce((result: Map<string, number>, word: string): Map<string, number> => {
                result.set(word, (result.get(word) || 0) + 1);
                return result;
            }, new Map<string, number>());
    }
}

export default Words;
