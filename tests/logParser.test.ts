import { parseLog } from '../src/logParser';

describe('parseLog', () => {
    test('Parses a valid line correctly', () => {
        const line = '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574';
        const result = parseLog(line);
        expect(result).toEqual({
        ip: '177.71.128.21',
        url: '/intranet-analytics/',
        });
    });

    test('Handles an invalid line correctly', () => {
        const line = '12345';
        const result = parseLog(line);
        expect(result).toBeNull();
    });
});
