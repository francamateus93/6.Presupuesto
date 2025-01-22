import React, { useState, useEffect } from "react";

function BudgetList({ budgets }) {
  const [filteredBudgets, setFilteredBudgets] = useState(budgets);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    setFilteredBudgets(budgets);
  }, [budgets]);

  const sortByName = () => {
    const sortedName = [...filteredBudgets].sort((a, b) =>
      a.fullName.localeCompare(b.fullName)
    );
    setFilteredBudgets(sortedName);
  };

  const sortByDate = () => {
    const sortedDate = [...filteredBudgets].sort((a, b) => a.id - b.id);
    setFilteredBudgets(sortedDate);
  };

  const cleanFilter = () => {
    setFilteredBudgets([]);
    setInputSearch("");
  };

  const searchBudgets = (e) => {
    const term = e.target.value.toLowerCase();
    setInputSearch(term);
    const result = budgets.filter((budget) =>
      budget.fullName.toLowerCase().includes(term)
    );
    setFilteredBudgets(result);
  };

  return (
    <div className="mx-auto p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-extrabold px-10 tracking-tighter">
          Budget List:
        </h3>
        <div className="flex items-center justify-end gap-2">
          <input
            type="text"
            name="input-filter"
            value={inputSearch}
            onChange={searchBudgets}
            className="w-1/3 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
          <button
            onClick={sortByName}
            className="bg-white px-2 text-sm text-gray-400 font-medium hover:text-gray-600 focus:font-bold focus:text-slate-700 transition"
          >
            Name
          </button>
          <button
            onClick={sortByDate}
            className="bg-white px-2 text-sm text-gray-400 font-medium hover:text-gray-600 focus:font-bold focus:text-slate-700 transition"
          >
            Date
          </button>
          <button
            onClick={cleanFilter}
            className="bg-white px-2 text-sm text-cyan-600 font-semibold hover:text-cyan-700 focus:font-bold focus:text-cyan-700 transition"
          >
            Clean
          </button>
        </div>
      </div>
      {filteredBudgets.map((budget) => (
        <div
          key={budget.id}
          className="rounded-lg shadow-lg bg-white p-10 flex justify-between items-start gap-12 my-5"
        >
          <div className="p-1">
            <h3 className="text-2xl font-bold tracking-tight">
              {budget.fullName}
            </h3>
            <p className="text-sm text-gray-400">{budget.email}</p>
            <p className="text-sm text-gray-400">{budget.phoneNumber}</p>
          </div>
          <div className="p-1">
            <p className="font-semibold tracking-tight">Services purchased:</p>
            <p className="font-semibold">{budget.services.join(", ")}</p>
          </div>
          <div className="p-1">
            <p className="font-semibold justify-self-end tracking-tight">
              Total:{" "}
            </p>
            <p className="text-3xl font-extrabold tracking-tight">
              {budget.total}€
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BudgetList;
