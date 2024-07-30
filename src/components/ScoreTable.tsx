
const ScoreTable = ({ winnerHistory }: { winnerHistory: string[] }) => {
   return winnerHistory.map((item, index) => (

      <div key={index}>
         {item === 'x' || item === 'o'
            ? `Game ${index + 1}. Winner is ${item.toUpperCase()}`
            : `Game ${index + 1}. DRAW`}
      </div>
   ));
};

export default ScoreTable;
