import React, { useState } from "react";
import Card from "../components/calculator/Card";
import Total from "../components/calculator/Total";
import Options from "../components/calculator/Options";
import Budget from "../components/calculator/Budget";
import BudgetList from "../components/calculator/BudgetList";
import Toggle from "../components/calculator/Toggle";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();

  // State - Service and Price
  const [services, setServices] = useState({
    seo: { price: 300, isChosen: false },
    ads: { price: 400, isChosen: false },
    web: { price: 500, isChosen: false },
  });

  // State - Pages and Languages
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);

  // State - Budget and ID
  const [budgets, setBudgets] = useState([]);
  const [idBudget, setIdBudget] = useState(1);

  // State - Discount
  const [annualDiscount, setannualDiscount] = useState(false);

  const handleToogle = () => {
    setannualDiscount(!annualDiscount);
    onToggle(!annualDiscount);
  };

  const handleBudget = (newBudget) => {
    const budgetWithId = { ...newBudget, id: idBudget };
    const updatedBudgets = [...budgets, budgetWithId].sort(
      (a, b) => a.id - b.id
    );
    setBudgets(updatedBudgets);
    setIdBudget((id) => id + 1);
  };

  const handleCheckbox = (service) => {
    setServices((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        isChosen: !prev[service].isChosen,
      },
    }));
  };

  // Calculate total price
  const webPrice = 500 + (pages + languages) * 30;
  const totalPrice = Object.entries(services).reduce((sum, [key, service]) => {
    if (key === "web" && service.isChosen) {
      return sum + webPrice;
    }
    return service.isChosen ? sum + service.price : sum;
  }, 0);

  return (
    <main className="flex flex-col justify-center gap-2">
      <Navbar />
      <section className="flex flex-col gap-6">
        <Toggle />
        <Card
          product="Seo"
          price={300}
          isChosen={services.seo.isChosen}
          onChange={() => handleCheckbox("seo")}
        />
        <Card
          product="Ads"
          price={400}
          isChosen={services.ads.isChosen}
          onChange={() => handleCheckbox("ads")}
        />
        <Card
          product="Web"
          price={500}
          isChosen={services.web.isChosen}
          onChange={() => handleCheckbox("web")}
        >
          <Options
            pages={pages}
            setPages={setPages}
            languages={languages}
            setLanguages={setLanguages}
          />
        </Card>
        <Total total={totalPrice} />
        <Budget
          addNewBudget={handleBudget}
          services={services}
          totalPrice={totalPrice}
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <BudgetList budgets={budgets} />
      </section>
    </main>
  );
}

export default Calculator;
