import React, { useState } from "react";

function Budget({ addNewBudget, services, totalPrice }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveBudget = () => {
    if (!fullName || !email || !phoneNumber) {
      alert("Please complete all the form.")
      return;
    };
    
    const selectedServices = Object.entries(services)
    .filter(([_, service]) => service.isChosen)
    .map(([key]) => key); 
    
    const newBudget = {
     name: fullName,
     email: email,
     phone: phoneNumber,
     services: selectedServices,
     total: totalPrice
    };
    
    addNewBudget(newBudget);
    setFullName('');
    setEmail('');
    setPhoneNumber('');
  }
   
  return (
  <div className="rounded-lg shadow-lg p-12 mx-auto">
    <div>
      <h3 className="text-3xl font-extrabold mb-6">Request a Budget</h3>
        <div className="flex flex-wrap justify-start items-center gap-2">
          <input 
            type="text"
            name="input-name"
            placeholder="Full Name"
            value={fullName}
            onChange={(name) => setFullName(name.target.value)}
            className="border rounded-lg w-40 px-2 py-2 text-sm"
            required
           />
          <input 
            type="email"
            name="input-email"
            placeholder="Email"
            value={email}
            onChange={(mail) => setEmail(mail.target.value)}
            className="border rounded-lg w-36 px-2 py-2 text-sm"
            required />
          <input 
            type="number"
            name="input-cel"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone.target.value) }
            className="border rounded-lg w-32 px-2 py-2 text-sm"
            required />
          <button
            onClick={saveBudget}
            className="px-6 py-2 shadow-lg text-center text-sm rounded-lg text-white bg-cyan-600 hover:bg-cyan-700">Send</button>
        </div>
    </div>
  </div>
  )
}

export default Budget;