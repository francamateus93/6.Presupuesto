import React, { useState } from "react";
import { useEffect } from "react";

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
    <div className="mx-auto px-5 sm:p-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-5">
        <h3 className="text-3xl font-extrabold tracking-tighter my-4 md:my-0">
          Budget List:
        </h3>
        <div className="flex justify-end mt-3 sm:mt-0">
          <input
            type="text"
            name="input-filter"
            value={inputSearch}
            onChange={searchBudgets}
            className="w-full sm:w-1/3 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
          <button
            onClick={sortByName}
            className="bg-white px-3 md:px-2 py-1 text-sm text-gray-400 font-medium hover:text-gray-600 focus:font-bold focus:text-slate-700 transition"
          >
            Name
          </button>
          <button
            onClick={sortByDate}
            className="bg-white px-1 py-2 text-sm text-gray-400 font-medium hover:text-gray-600 focus:font-bold focus:text-slate-700 transition"
          >
            Date
          </button>
          <button
            onClick={cleanFilter}
            className="bg-white px-1 py-1 text-sm text-cyan-600 font-semibold hover:text-cyan-700 focus:font-bold focus:text-cyan-700 transition"
          >
            Clean
          </button>
        </div>
      </div>
      {filteredBudgets.map((budget) => (
        <div
          key={budget.id}
          className="rounded-lg shadow-lg bg-white p-5 sm:p-10 flex sm:flex-row justify-center items-start gap-4 my-5"
        >
          <div className="p-1">
            <h3 className="text-2xl font-bold tracking-tight">
              {budget.fullName}
            </h3>
            <p className="text-xs text-gray-400">{budget.email}</p>
            <p className="text-xs text-gray-400">{budget.phoneNumber}</p>
          </div>
          <div className="p-1 flex-1 flex flex-col items-center">
            <p className="text-xs md:text-sm font-semibold tracking-tight">
              Services:
            </p>
            <p className="text-xs md:text-sm font-semibold tracking-tight">
              {budget.services.join(", ")}
            </p>
          </div>
          <div className="p-1 flex flex-col items-end">
            <p className="text-xs md:text-sm font-semibold tracking-tight">
              Total:{" "}
            </p>
            <p className="md:text-3xl text-2xl font-extrabold tracking-tight">
              {budget.total}€
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BudgetList;
