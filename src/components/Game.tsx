import Board from './Board';
import Reset from './Reset';

const Game = () => {
   return (
      <div className="min-h-screen w-full bg-white flex justify-center items-center">
         <div className="flex flex-col items-center">
            <Board />
            <Reset />
         </div>
      </div>
   );
};

export default Game;
