//Complexidade O(n)

/**
 * Reverse the characters of a string.
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage
const inputStr: string = "Hello, World!";
const reversedStr: string = reverseString(inputStr);
console.log(`Original string: ${inputStr}`);
console.log(`Reversed string: ${reversedStr}`);
