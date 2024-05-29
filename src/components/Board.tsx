import { useCallback, useEffect, useState } from 'react';
import Square from './Square';
import { resetGame, checkWinner, checkDraw } from '../Util';
import ScoreTable from './ScoreTable';

const Board = () => {
   // debugger;
   const [squares, setSquare] = useState<string[]>(Array(9).fill(''));
   const [isNextX, setIsNextX] = useState<boolean>(true);
   const [winner, setWinner] = useState<string[]>([]);
   const [isWinner, setIsWinner] = useState<boolean>(false);
   const [isDraw, setIsDraw] = useState<boolean>(false);
   const [info, setInfo] = useState<string>('Next is X');

   useEffect(() => {
      const winner = checkWinner(squares);
      if (winner) {
         setWinner((prevWinners) => [...prevWinners, winner]);
         setIsWinner(true);
         setInfo(`Winner is ${winner.toUpperCase()}`);
      } else if (checkDraw(squares, isWinner)) {
         setIsDraw(true);
         setInfo(`It's a draw`);
         setWinner((prevWinners) => [...prevWinners, 'Draw']);
      } else {
         setInfo(`Next is ${isNextX ? 'X' : 'O'}`);
      }
   }, [squares]);

   const setSquaresValue = useCallback(
      (index: number): void => {
         if (isWinner || isDraw || squares[index]) {
            resetGame(setSquare, setIsNextX, setIsWinner, setIsDraw);
            return;
         }
         const newSquares = squares.slice();
         newSquares[index] = isNextX ? 'x' : 'o';
         setSquare(newSquares);
         setIsNextX(!isNextX);
      },
      [isWinner, isDraw, squares, isNextX]
   );

   return (
      <>
         <div className="bg-[#d08d5a] rounded border-2 border-neutral-900">
            <h1 className="text-center text-3xl mt-6">{info}</h1>
            <div className="grid grid-cols-3 gap-2">
               {squares.map((square, index) => (
                  <Square
                     key={index}
                     value={square}
                     setSquaresValue={() => setSquaresValue(index)}
                  />
               ))}
            </div>
         </div>
         <button
            className="mt-6 bg-[#e3ab79] rounded-md border-2 border-neutral-900 px-10 py-2 text-xl"
            onClick={() =>
               resetGame(setSquare, setIsNextX, setIsWinner, setIsDraw)
            }
         >
            Reset
         </button>
         <ScoreTable winner={winner} />
      </>
   );
};

export default Board;
