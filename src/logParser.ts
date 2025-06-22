import { LogInfo } from "./types";

/**
 * Parses a string containing a standard access log and returns the IP address and URL in a LogInfo object.
 *
 * @param line - A string containing a standard access log.
 * @returns A LogInfo object containing the IP address and URL, or null if it cannot be matched.
 */
export const parseLog = (log: string): LogInfo | null  => {
    // TODO: replace regex with log parser
    const regex = /^(\S+) .+ "(?:[A-Z]+) (.+?) HTTP/;

    const match = log.match(regex);
    if (match) {
        return {ip: match[1], url: match[2]}
    };
    return null;
};