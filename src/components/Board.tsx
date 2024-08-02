import Square from './Square';
import ScoreTable from './ScoreTable';
import { resetGame, setSquare } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';

const Board = () => {
   const dispatch = useDispatch();

   // const squares = useSelector((state) => state.squares);
   // const info = useSelector((state) => state.info);
   // const winnerHistory = useSelector((state) => state.winnerHistory);
   const { squares, info, winnerHistory } = useSelector(
      (state: RootState) => state.game
   );

   const handleSquareClick = (index: number) => {
      dispatch(setSquare(index));
   };
   const handleReset = () => {
      dispatch(resetGame());
   };

   return (
      <>
         <div className="bg-[#d08d5a] rounded border-2 border-neutral-900">
            <h1 className="text-center text-3xl mt-6">{info}</h1>
            <div className="grid grid-cols-3 gap-2">
               {squares.map((square, index) => (
                  <Square
                     key={index}
                     value={square}
                     handleSquareClick={() => handleSquareClick(index)}
                  />
               ))}
            </div>
         </div>
         <button
            className="mt-6 bg-[#e3ab79] rounded-md border-2 border-neutral-900 px-10 py-2 text-xl"
            onClick={handleReset}
         >
            Reset
         </button>
         <ScoreTable winnerHistory={winnerHistory} />
      </>
   );
};

export default Board;
