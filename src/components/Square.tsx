import React from 'react';
interface SquareProps {
   key: number;
   value: string | null;
   handleSquareClick: () => void;
}

const Square: React.FC<SquareProps> = React.memo(
   ({ value, handleSquareClick }) => {
      return (
         <button
            className="text-[6vh] w-[12vh] h-[12vh] m-[2vh] bg-[#F4A460] rounded-md border-2 border-neutral-900"
            onClick={handleSquareClick}
            style={{
               color: value ? '#432b16' : '#F4A460',
            }}
         >
            {value ? value : '-'}
         </button>
      );
   }
);

export default Square;
