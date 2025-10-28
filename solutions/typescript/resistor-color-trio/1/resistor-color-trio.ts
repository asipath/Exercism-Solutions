export function decodedResistorValue(colors: string[]): string {
    if (colors.length < 3) {
        throw new Error("Three colors are required: two digits and one multiplier.");
    }

    // 1. Calculate the base value (first two bands)
    const firstDigit = colorCode(colors[0]); // e.g., 3 (orange)
    const secondDigit = colorCode(colors[1]); // e.g., 3 (orange)

    // The base value is (D1 * 10) + D2
    const baseValue = (firstDigit * 10) + secondDigit; // e.g., 33

    // 2. Determine the multiplier (third band)
    const multiplierCode = colorCode(colors[2]); // e.g., 3 (orange)

    // Calculate the total resistance in ohms: Value * 10^Multiplier
    const totalOhms = baseValue * Math.pow(10, multiplierCode);

    // 3. Format the result with Metric Prefixes
    
    // Iterate through prefixes from largest to smallest
    for (const prefix of PREFIXES) {
        if (totalOhms >= prefix.value) {
            const scaledValue = totalOhms / prefix.value;
            
            // Format the final output string
            return `${scaledValue} ${prefix.symbol}ohms`.trim();
        }
    }

    // Fallback for very small values (shouldn't happen with these codes)
    return `${totalOhms} ohms`;
}
// All color codes, mapping position (index) to value
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

// Metric Prefixes used for formatting large numbers
// 10^3 = Kilo (1,000)
// 10^6 = Mega (1,000,000) - Included for completeness, though not strictly required by the example.
const PREFIXES = [
    { value: 1e9, symbol: "giga" }, // 10^9
    { value: 1e6, symbol: "mega" }, // 10^6
    { value: 1e3, symbol: "kilo" }, // 10^3
    { value: 1, symbol: "" }
];

/**
 * Helper function to get the numerical value of a color band.
 */
export const colorCode = (color: string): number => {
  const index = COLORS.indexOf(color.toLowerCase());
  if (index === -1) {
    throw new Error(`Invalid color: ${color}`);
  }
  return index;
};