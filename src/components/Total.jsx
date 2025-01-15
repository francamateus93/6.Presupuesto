import React from "react";

function Total({ total }) {
  return (
    <>
      <div>
        <h2>Budget price:</h2>
        <p>{total} €</p>
      </div>
    </>
  )
}

export default Total