import React from "react";

function Total({ total }) {
  return (
    <div className="flex text-end mt-4">
      <h2 className="text-xl font-semibold">Budget price:</h2>
      <p className="text-2xl font-bold">{total} €</p>
    </div>
  )
}

export default Total