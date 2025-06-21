# Zach Giofkou Mantel Group Programming Task

## Purpose

This program parses a log of HTTP requests and reports on:

- Number of unique IP addresses
- Top 3 most visited URLs
- Top 3 most active IP addresses

URLs and IP addresses are grouped by number of occurrences, possibly resulting in more than 3 "top 3" values.

## Usage

### Install dependencies

This project runs in TypeScript. To install required dependencies:
```bash
npm install
```

### Running the program

To run the program and see the report on the log data:
```bash
npm start
```

The file being read can be changed by replacing `filePath` in `main.ts` with the path to another file.

### Running tests

To run tests:
```bash
npm test
```

To run tests with code coverage:
```bash
npm run test:coverage
```

## Assumptions

This program can read in a text file of HTTP requests broken by new lines. A valid HTTP request follows the pattern of a standard access log and specifically extracts the IP address and URL.

The requirements for a line to be read as valid are:
- The IP address is assumed to be the first field in the log
- The URL is enclosed in quotes and follows an uppercase HTTP method (`GET`, `POST`, etc.) and is followed by `HTTP`

Invalid lines are safely ignored and will not be included in the report.