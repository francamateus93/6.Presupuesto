import React from "react";

function BudgetList({budgets}) {
  return (
    <section className="my-8">
      <h3 className="text-3xl font-extrabold">Budget List:</h3>
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div
              key={budget.id} 
              className="border rounded-lg shadow-lg bg-white flex justify-between">
              <div>
                <h3>{budget.name}</h3>
                <p>{budget.email}</p>
                <p>{budget.phone}</p>
              </div>
              <div>
                <p>Services purchased:</p>
                <p>{budget.services.join(', ')}</p>
              </div>
              <div>
                <p>Total: </p>
                <p>{budget.total}€</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
};

export default BudgetList;