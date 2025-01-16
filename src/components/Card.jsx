import React from "react";

function Card({ product, price, ischosen, onChange }) {
  return (
    <div className="flex justify-between items-center rounded-lg shadow-lg p-4">
      <div>
        <h3 className="text-lg font-bold">{product}</h3>
        <p className="text-sm text-gray-700">Programming a complete responsive website</p>
      </div>
      <div className="flex items-center gap-5">
        <strong className="font-bold text-xl text-gray-900">{price} €</strong>
        <input 
          type="checkbox"
          name="input-form"
          className="h-5 w-5 p-2"
          ischosen={ischosen}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Card
