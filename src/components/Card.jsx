import React from "react";

function Card({ product, price, ischosen, onChange }) {
  return (
    <div className="bg-white flex justify-between items-center gap-12 rounded-lg shadow-lg p-10 mx-auto">
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
          className="h-4 w-4"
          ischosen={ischosen}
          onChange={onChange}
        /> <span className="text-xs font-semibold text-gray-700">Check</span>
        </div> 
      </div>
  )
}

export default Card
