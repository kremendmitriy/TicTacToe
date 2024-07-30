import Board from './Board';
import { useState, useEffect } from 'react';
import store from '../states/store';

const Game = () => {
   const [state, setState] = useState(store.getState());

   useEffect(() => {
      const unsubscribe = store.subscribe(() => {
         setState(store.getState());
      });
      return () => unsubscribe();
   }, []);

   return (
      <div className="min-h-screen w-full bg-white flex justify-center items-center">
         <div className="flex flex-col items-center">
            <Board state={state} dispatch={store.dispatch} />
         </div>
      </div>
   );
};

export default Game;
