import React from "react";

function Total({ total }) {
  return (
    <div className="flex justify-end items-center gap-2 mx-auto my-4 py-6">
      <h2 className="text-3xl font-extrabold tracking-tighter">Budget price:</h2>
      <p className="text-3xl font-extrabold tracking-tighter">{total}€</p>
    </div>
  )
}

export default Total;