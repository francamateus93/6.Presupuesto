import React from "react";

function Card({ product, price, isChosen, onChange }) {
  return (
    <div>
      <div>
        <h3>{product}</h3>
        <p>Programming a complete responsive website</p>
      </div>
      <div>
        <strong>{price} €</strong>
        <input 
          type="checkbox"
          isChosen={isChosen}
          onChange={onChange}
          ClassName="" 
        />
      </div>
    </div>
  )
}

export default Card