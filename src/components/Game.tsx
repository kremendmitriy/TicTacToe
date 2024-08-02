import Board from './Board';

const Game = () => {
   return (
      <div className="min-h-screen w-full bg-white flex justify-center items-center">
         <div className="flex flex-col items-center">
            <Board />
         </div>
      </div>
   );
};

export default Game;
