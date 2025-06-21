export const parseLine = (line: string): {ip: string; url: string} | null  => {
    // TODO: replace regex with log parser
    const regex = /^(\S+) .+ "(?:[A-Z]+) (.+?) HTTP/;

    const match = line.match(regex);
    if (match) {
        return {ip: match[1], url: match[2]}
    };
    return null;
};