import React, { useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Slidebar = ({ scrollRef, nextProduct, preveProduct }) => {
  return (
    <div className="ml-auto flex gap-4">
      <button
        onClick={preveProduct}
        className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
      >
        <GrPrevious />
      </button>
      <button
        onClick={nextProduct}
        className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Slidebar;
