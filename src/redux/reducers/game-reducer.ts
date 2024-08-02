import { initialState } from './game-initialState';
import { checkWinner, checkDraw } from '../../Util';
import { Action } from '../../types';

export const gameReducer = (state = initialState, action: Action) => {
   const { type, payload } = action;

   switch (type) {
      case 'RESET_GAME':
         return {
            ...state,
            squares: Array(9).fill(null),
            isNextX: true,
            isWinner: false,
            isDraw: false,
            winner: [],
            info: 'Next is X',
         };
      case 'SET_SQUARE': {
         if (state.squares[payload] || state.isWinner || state.isDraw) {
            return state;
         }

         const newSquares = state.squares.slice();
         newSquares[payload] = state.isNextX ? 'x' : 'o';

         const winner = checkWinner(newSquares);
         const isDraw = checkDraw(newSquares, state.isWinner);

         return {
            ...state,
            squares: newSquares,
            isNextX: !state.isNextX,
            winner,
            isWinner: !!winner,
            isDraw,
            winnerHistory: winner
               ? [...state.winnerHistory, winner]
               : isDraw
               ? [...state.winnerHistory, 'Draw']
               : state.winnerHistory,
            info: winner
               ? `Winner is ${winner}`
               : isDraw
               ? "It's a draw"
               : `Next is ${state.isNextX ? 'O' : 'X'}`,
         };
      }
      default:
         return state;
   }
};
