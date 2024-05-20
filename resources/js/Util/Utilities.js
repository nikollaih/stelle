export const getName = (inputString) => {
    const words = inputString.trim().split(' ');

    if (words.length >= 4) {
        const firstName = words[0] + ' ' + words[1];
        const lastName = words.slice(2).join(' ');
        return { firstName, lastName };
    } else if (words.length === 3) {
        const firstName = words[0];
        const lastName = words.slice(1).join(' ');
        return { firstName, lastName };
    } else if (words.length === 2) {
        const firstName = words[0];
        const lastName = words[1];
        return { firstName, lastName };
    } else if (words.length === 1) {
        const firstName = words[0];
        const lastName = '';
        return { firstName, lastName };
    } else {
        return null; // Empty or invalid input
    }
}
