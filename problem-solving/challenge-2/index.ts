const checkDice = (dice: number): boolean => {
  if (dice > 0 && dice < 7) return true;
  return false;
} 

export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {

  if (!checkDice(dice1) || !checkDice(dice2) || !checkDice(dice3)) throw new Error("Dice out of number range");
  if (dice1 === dice2 && dice2 === dice3) return dice1 * 3;
  if (dice1 === dice2 || dice1 === dice3) return dice1 * 2;
  if (dice2 === dice1 || dice2 === dice3) return dice2 * 2;
  if (dice3 === dice1 || dice3 === dice2) return dice3 * 2;
  return Math.max(dice1, dice2, dice3);
};
