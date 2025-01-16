import React from "react";

function Total({ total }) {
  return (
    <div className="flex justify-end items-center gap-4 mx-auto py-6">
      <h2 className="text-xl font-extrabold">Budget price:</h2>
      <p className="text-3xl font-extrabold">{total} €</p>
    </div>
  )
}

export default Total