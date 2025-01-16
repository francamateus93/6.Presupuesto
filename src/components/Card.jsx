import React from "react";

function Card({ product, price, ischosen, onChange }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3>{product}</h3>
        <p>Programming a complete responsive website</p>
      </div>
      <div>
        <strong>{price} €</strong>
        <input 
          type="checkbox"
          name="input-form"
          ischosen={ischosen}
          onChange={onChange}
          // className="" 
        />
      </div>
    </div>
  )
}

export default Card