export const resetGame = () => {
   return {
      type: 'RESET_GAME',
   };
};

export const setSquare = (index) => {
   return {
      type: 'SET_SQUARE',
      payload: index,
   };
};
