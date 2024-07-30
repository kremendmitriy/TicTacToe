// WIN PATTERNS
export const winPatterns = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];
// RESET GAME
export function resetGame(
   setSquare: React.Dispatch<React.SetStateAction<string[]>>,
   setIsNextX: React.Dispatch<React.SetStateAction<boolean>>,
   setIsWinner: React.Dispatch<React.SetStateAction<boolean>>,
   setIsDraw: React.Dispatch<React.SetStateAction<boolean>>
) {
   setSquare(Array(9).fill(''));
   setIsNextX(true);
   setIsWinner(false);
   setIsDraw(false);
}
// CHECK WINNER
export function checkWinner(squares: string[]): string {
   for (const combination of winPatterns) {
      const [a, b, c] = combination;
      if (
         squares[a] &&
         squares[a] === squares[b] &&
         squares[b] === squares[c]
      ) {
         return squares[a];
      }
   }
   return '';
}
// CHECK DRAW
export function checkDraw(squares: string[], isWinner: boolean): boolean {
   return squares.every((square) => !!square) && !isWinner;
}
