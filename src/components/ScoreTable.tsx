const ScoreTable = ({ winner }: { winner: string[] }) => {
   return winner.map((item, index) => (
      <div key={index}>
         {item === 'x' || item === 'o'
            ? `Game ${index + 1}. Winner is ${item.toUpperCase()}`
            : `Game ${index + 1}. DRAW`}
      </div>
   ));
};

export default ScoreTable;
