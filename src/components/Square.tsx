import React from 'react';

interface SquareProps {
   value: string | null;
   setSquaresValue: () => void;
}

const Square: React.FC<SquareProps> = ({ value, setSquaresValue }) => {
   return (
      <button
         className="text-[6vh] w-[12vh] h-[12vh] m-[2vh] bg-[#F4A460] rounded-md border-2 border-neutral-900"
         onClick={setSquaresValue}
         style={{
            color: value ? '#432b16' : '#F4A460',
         }}
      >
         {value ? value : '-'}
      </button>
   );
};

export default Square;
