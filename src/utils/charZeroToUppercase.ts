export const charZeroToUpperCase = (oldString: string) => {
    const firstChar: string = oldString.charAt(0).toUpperCase();
    const rest: string = oldString.slice(1);
    const newString = firstChar + rest;

    return newString;
}