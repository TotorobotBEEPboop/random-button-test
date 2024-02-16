export const getRandomBackground = (numberOfColors: number): string => {
  const generateRandomHSLColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  const randomColors = Array.from(
    { length: numberOfColors },
    generateRandomHSLColor
  );
  const shuffleArray = (array: string[]) =>
    array.slice().sort(() => Math.random() - 0.5);
  const shuffledColors = shuffleArray(randomColors);

  return `conic-gradient(${shuffledColors.join(", ")})`;
};
