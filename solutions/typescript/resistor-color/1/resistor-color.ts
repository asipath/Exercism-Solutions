export const colorCode = (color: string): number => {
  const index = COLORS.indexOf(color.toLowerCase());
  
  if (index === -1) {
    throw new Error(`Color "${color}" not found in the color code list.`);
  }

  return index;
};

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
