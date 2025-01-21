import React from "react";

function Card({ product, price, isChosen, onChange, children }) {
  return (
  <div className={`rounded-lg shadow-lg p-10 mx-auto flex flex-col justify-center ${isChosen ? "border-2 border-cyan-600" : "none"}`}>
    <div className="flex justify-between items-center gap-12">
      <div>
        <h3 className="text-3xl font-extrabold">{product}</h3>
        <p className="text-sm text-gray-400">Programming a complete responsive website</p>
      </div>
      <div className="flex items-center gap-5">
        <strong className="font-black text-4xl">{price}<span className="text-base">€</span></strong>
      </div>
      <div className="flex items-center gap-2">
        <input 
          type="checkbox"
          name="input-form"
          className="form-checkbox h-4 w-4"
          checked={isChosen}
          onChange={onChange}
        />
        <span className="text-sm font-medium text-gray-600">Check</span>
      </div>
      </div>
      {isChosen && <div>{children}</div>}
    </div>
  );
}

export default Card
