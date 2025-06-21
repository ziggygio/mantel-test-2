import { getNumberOfIps, getTop3Items } from '../src/reporter';

describe('getNumberOfIps', () => {
    test('Gets number of unique IPs from a valid list correctly', () => {
        const data = [
        { ip: '1.1.1.1', url: '/domain1/' },
        { ip: '2.2.2.2', url: '/domain2/' },
        { ip: '1.1.1.1', url: '/domain3/' },
        ];
        expect(getNumberOfIps(data)).toBe(2);
    });
});

describe('getTop3Items', () => {
    test('Gets top 3 most frequently occuring items from a valid list correctly', () => {
        const input = ['1.1.1.1', '2.2.2.2', '1.1.1.1', '3.3.3.3', '1.1.1.1', '2.2.2.2'];
        const output = getTop3Items(input);
        expect(output).toEqual([
        '3 occurrences: 1.1.1.1',
        '2 occurrences: 2.2.2.2',
        '1 occurrences: 3.3.3.3',
        ]);
    });

    test('Groups items which occur the same amount of times', () => {
        const input = ['1.1.1.1', '2.2.2.2', '1.1.1.1', '2.2.2.2', '3.3.3.3', '1.1.1.1', '2.2.2.2', '3.3.3.3', '4.4.4.4'];
        const output = getTop3Items(input);
        expect(output).toEqual([
        '3 occurrences: 1.1.1.1, 2.2.2.2',
        '2 occurrences: 3.3.3.3',
        '1 occurrences: 4.4.4.4'
        ]);
    });

    test('Breaks when top 3 positions are filled', () => {
        const input = ['1.1.1.1', '2.2.2.2', '1.1.1.1', '3.3.3.3', '2.2.2.2', '4.4.4.4', '1.1.1.1', '2.2.2.2', '5.5.5.5', '1.1.1.1', '3.3.3.3'];
        const output = getTop3Items(input);
        expect(output.length).toBe(3);
    });
});
