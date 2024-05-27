const Reset = () => {
   function resetBoard() {
      window.location.reload();
      return;
   }
   return (
      <button
         className="mt-6 bg-[#e3ab79] rounded-md border-2 border-neutral-900 px-10 py-2 text-xl"
         onClick={resetBoard}
      >
         Reset
      </button>
   );
};

export default Reset;
