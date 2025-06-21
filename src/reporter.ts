export const getNumberOfIps = (parsedLines: { ip: string; url: string }[]): number => {
    const uniqueIps = new Set(parsedLines.map(line => line.ip));
    return uniqueIps.size;
};

export const getTop3Items = (items: string[]): string[] => {
    let countMap = new Map<string, number>();

    items.forEach(item => {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    });

    const sortedCountMap = Array.from(countMap.entries())
        .sort((a, b) => b[1] - a[1]);

    const result: string[] = [];
    let lastCount = null;

    for (const [item, count] of sortedCountMap) {
        if (count == lastCount) {
            result[result.length - 1] += `, ${item}`;
        } else if (result.length < 3) {
            result.push(`${count} occurrences: ${item}`);
        } else {
            break;
        }

        lastCount = count;
    }
    
    return result;
};