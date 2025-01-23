import React, { useState } from "react";

function Budget({ addNewBudget, services, totalPrice }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Validation
  const [error, setError] = useState({});

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (number) => /^[0-9]+$/.test(number);

  const handleBudget = () => {
    const newError = {};

    if (!validateName(fullName)) {
      newError.fullName = "Enter a valid name";
    }
    if (!validateEmail(email)) {
      newError.email = "Enter a valid email";
    }
    if (!validatePhone(phoneNumber)) {
      newError.phoneNumber = "Enter a valid phone number";
    }
    setError(newError);

    if (Object.keys(newError).length === 0) {
      const selectedServices = Object.entries(services)
        .filter(([_, service]) => service.isChosen)
        .map(([key]) => key);

      const newBudget = {
        fullName,
        email,
        phoneNumber,
        services: selectedServices,
        total: totalPrice,
      };

      addNewBudget(newBudget);
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setError({});
    }
  };

  return (
    <div className="rounded-lg shadow-lg p-12 mx-auto">
      <div>
        <h3 className="text-3xl font-extrabold mb-6 tracking-tighter">
          Request a Budget
        </h3>
        <div className="flex flex-wrap justify-start items-center gap-2">
          <input
            type="text"
            name="input-name"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`border rounded-lg w-40 px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 ${
              error.fullName ? "border-red-500" : ""
            }`}
            required
          />
          {error.fullName && (
            <div className="flex flex-wrap">
              <p className="text-red-500 text-sm py-1">{error.fullName}</p>
            </div>
          )}
          <input
            type="email"
            name="input-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border rounded-lg w-40 px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 ${
              error.email ? "border-red-500" : ""
            }`}
            required
          />
          {error.email && (
            <p className="text-red-500 text-sm py-1">{error.email}</p>
          )}
          <input
            type="number"
            name="input-cel"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`border rounded-lg w-40 px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 ${
              error.phoneNumber ? "border-red-500" : ""
            }`}
            required
          />
          {error.phoneNumber && (
            <p className="text-red-500 text-sm py-1">{error.phoneNumber}</p>
          )}
          <button
            onClick={handleBudget}
            className="px-6 py-2 text-center text-sm rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition"
          >
            {" "}
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Budget;
