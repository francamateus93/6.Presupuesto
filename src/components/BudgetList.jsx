import React from "react";

function BudgetList({ budgets }) {
  return (
    <div className="mx-auto p-10">
      <div className="space-y-4">
        <h3 className="text-3xl font-extrabold px-10 tracking-tighter">
          Budget List:
        </h3>
        {budgets.map((budget) => (
          <div
            key={budget.id}
            className="rounded-lg shadow-lg bg-white p-10 flex justify-between items-start gap-12"
          >
            <div className="p-1">
              <h3 className="text-2xl font-bold tracking-tight">
                {budget.fullName}
              </h3>
              <p className="text-sm text-gray-400">{budget.email}</p>
              <p className="text-sm text-gray-400">{budget.phoneNumber}</p>
            </div>
            <div className="p-1">
              <p className="font-semibold pt-1">Services purchased:</p>
              <p className="font-semibold">{budget.services.join(", ")}</p>
            </div>
            <div className="p-1">
              <p className="font-semibold justify-self-end">Total: </p>
              <p className="text-3xl font-extrabold">{budget.total}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetList;
