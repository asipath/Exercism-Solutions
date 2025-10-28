export function decodedValue(colors:string[]) {
// Check for required minimum input
    if (colors.length < 2) {
        // You might handle this with an error or return 0, depending on requirements.
        throw new Error("Input array must contain at least two colors.");
    }

    // Get the index (value) of the first color (the tens digit)
    const firstDigit = COLORS.indexOf(colors[0].toLowerCase());

    // Get the index (value) of the second color (the units digit)
    const secondDigit = COLORS.indexOf(colors[1].toLowerCase());
  
// --- Core Calculation ---
    // Multiply the first digit by 10 and add the second digit to form the two-digit number.
    const total = (firstDigit * 10) + secondDigit;

    // Optional: Add basic input validation for -1 (color not found)
    if (firstDigit < 0 || secondDigit < 0) {
        throw new Error("One or both colors are invalid.");
    }

    return total;
}
export const COLORS: string[] = [
  'black', // 0
  'brown', // 1
  'red',   // 2
  'orange',// 3
  'yellow',// 4
  'green', // 5
  'blue',  // 6
  'violet',// 7
  'grey',  // 8
  'white', // 9
];