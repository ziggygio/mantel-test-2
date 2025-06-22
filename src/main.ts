import fs from 'fs';
import { parseLog } from './logParser';
import { getNumberOfIps, getTop3Items } from './reporter';
import { LogInfo } from './types';

const filePath = 'data/programming-task-example-data.log';

// TODO: stream file
const file = fs.readFileSync(filePath, 'utf-8');
const parsedLines: LogInfo[] = file.split('\n').map(line => parseLog(line)).filter(line => line !== null);

const numberOfIps = getNumberOfIps(parsedLines);
const top3Urls = getTop3Items(parsedLines.map(line => line.url));
const top3Ips = getTop3Items(parsedLines.map(line => line.ip));

// TODO: format output to handle undefined
console.log(`Number of unique IPs: ${numberOfIps}`);
console.log("Top 3 most active IPs:\n1: " + top3Ips[0] + "\n2: " + top3Ips[1] + "\n3: " + top3Ips[2]);
console.log("Top 3 most visited URLs:\n1: " + top3Urls[0] + "\n2: " + top3Urls[1] + "\n3: " + top3Urls[2]);