import React from "react";

function Toggle({ onToggle }) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center mx-2">
        <span className="mx-2 font-medium tracking-tight text-gray-600">
          Month
        </span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            name="toogle switch"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={onToggle}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          >
            {isDiscountActive ? "Remove Discount" : "Apply 20% Discount"}
          </div>
        </label>
      </div>
    </div>
  );
}

export default Toggle;
