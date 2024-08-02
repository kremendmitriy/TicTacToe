import { GameState } from '../../types.ts';

export const initialState: GameState = {
   squares: Array(9).fill(null),
   isNextX: true,
   winner: [],
   isWinner: false,
   isDraw: false,
   winnerHistory: [],
   info: 'Next is X',
};
