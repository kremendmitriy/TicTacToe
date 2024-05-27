import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Square from './Square';
import { winPatterns } from '../Util';

const Board = () => {
   const [squares, setSquare] = useState<(string | null)[]>(
      Array(9).fill(null)
   );
   const [isNextX, setIsNextX] = useState<boolean>(true);

   let info = `Next is ${isNextX ? 'X' : 'O'}`;
   let isWinner = false;
   let winner: string | null = null;
   let isDraw = false;

   function setSquaresValue(index: number): void {
      if (isWinner || isDraw) {
         window.location.reload();
         return;
      }
      if (squares[index]) return;
      const newSquares = squares.slice();
      newSquares[index] = isNextX ? 'x' : 'o';
      setIsNextX(!isNextX);
      setSquare(newSquares);
   }

   function checkWinner(): string | null {
      for (const combination of winPatterns) {
         const [a, b, c] = combination;
         if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[b] === squares[c]
         ) {
            isWinner = true;
            return squares[a];
         }
      }
      return null;
   }

   function checkDraw(): boolean {
      return squares.every((square) => square !== null) && !isWinner;
   }

   winner = checkWinner();
   if (winner) {
      info = `Winner is ${winner.toUpperCase()}`;
   } else if (checkDraw()) {
      isDraw = true;
      info = `It's a draw`;
   }

   return (
      <div className="bg-[#d08d5a] rounded border-2 border-neutral-900">
         <h1 className="text-center text-3xl mt-6">{info}</h1>
         <div className="grid grid-cols-3 gap-2">
            {squares.map((square, index) => (
               <Square
                  key={uuidv4()}
                  value={square}
                  setSquaresValue={() => setSquaresValue(index)}
               />
            ))}
         </div>
      </div>
   );
};

export default Board;
