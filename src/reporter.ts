import { LogInfo } from './types';

/**
 * Returns the number of unique IP addresses from an array of parsed lines.
 *
 * @param parsedLines - An array of LogInfo, each containing an  property.
 * @returns The count of unique IP addresses found in the input array.
 */
export const getNumberOfIps = (parsedLines: LogInfo[]): number => {
    const uniqueIps = new Set(parsedLines.map(line => line.ip));
    return uniqueIps.size;
};

/**
 * Returns the 3 most frequently occuring items from an array of strings and thieir counts. Groups items that have the same count together.
 *
 * @param items - An array of strings.
 * @returns An array of 3 strings, containing the top 3 most frequently occuring items (grouped if they have the same count) and the frequency of their occurrence.
 */
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
        if (count === lastCount) {
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