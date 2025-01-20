import React from "react";

function Card({ product, price, isChosen, onChange, children }) {
  return (
  <div className={`rounded-lg shadow-lg p-10 mx-auto" ${isChosen ? "border-2 border-gray-400" : "none"}`}>
    <div className="flex justify-between items-center gap-10" >
      <div>
        <h3 className="text-2xl font-extrabold">{product}</h3>
        <p className="text-sm text-gray-600">Programming a complete responsive website</p>
      </div>
      <div className="flex items-center gap-5">
        <strong className="font-black text-3xl">{price}<span className="text-base">€</span></strong>
      </div>
      <div className="flex justify-center items-center gap-2">
        <input 
          type="checkbox"
          name="input-form"
          className="form-checkbox h-4 w-4"
          checked={isChosen}
          onChange={onChange}
        />
        <span className="text-xs font-semibold text-gray-700">Check</span>
      </div>
      </div>
      {isChosen && <div>{children}</div>}
    </div>
  );
}

export default Card
