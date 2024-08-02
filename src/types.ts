export interface GameState {
   squares: Array<string | null>;
   isNextX: boolean;
   winner: string[];
   isWinner: boolean;
   isDraw: boolean;
   winnerHistory: string[];
   info: string;
}

export interface RootState {
   game: GameState;
}

export interface Action {
   type: string;
   payload: number;
}
