import React, { useEffect, useState } from "react";
import Card from "../components/calculator/Card";
import Total from "../components/calculator/Total";
import Options from "../components/calculator/Options";
import Budget from "../components/calculator/Budget";
import BudgetList from "../components/calculator/BudgetList";
import Toggle from "../components/calculator/Toggle";
import Navbar from "../components/Navbar";

function Calculator() {
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
  const [totalPrice, setTotalPrice] = useState(0);

  const handleToogle = () => {
    setannualDiscount(!annualDiscount);
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

  const handleBudget = (newBudget) => {
    const budgetWithId = { ...newBudget, id: idBudget };
    const updatedBudgets = [...budgets, budgetWithId].sort(
      (a, b) => a.id - b.id
    );
    setBudgets(updatedBudgets);
    setIdBudget((id) => id + 1);
  };

  // Calculate total price
  useEffect(() => {
    const calculateTotalPrice = () => {
      const baseWebPrice = 500 + (pages + languages) * 30;
      // Calcular el precio total
      const calculatedTotal = Object.entries(services).reduce(
        (sum, [key, service]) => {
          let servicePrice = service.price;
          if (key === "web" && service.isChosen) {
            servicePrice = baseWebPrice;
          }
          if (annualDiscount && service.isChosen) {
            servicePrice *= 0.8;
          }
          return service.isChosen ? sum + servicePrice : sum;
        },
        0
      );

      setTotalPrice(calculatedTotal);
    };

    calculateTotalPrice();
  }, [services, annualDiscount, pages, languages]);

  return (
    <main className="flex flex-col justify-center px-4 py-8 gap-2 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <Navbar />
      <section className="flex flex-col gap-6">
        <Toggle onToggle={handleToogle} annualDiscount={annualDiscount} />
        <Card
          product="Seo"
          price={annualDiscount ? services.seo.price * 0.8 : services.seo.price}
          isChosen={services.seo.isChosen}
          onChange={() => handleCheckbox("seo")}
          annualDiscount={annualDiscount}
        />
        <Card
          product="Ads"
          price={annualDiscount ? services.ads.price * 0.8 : services.ads.price}
          isChosen={services.ads.isChosen}
          onChange={() => handleCheckbox("ads")}
          annualDiscount={annualDiscount}
        />
        <Card
          product="Web"
          price={annualDiscount ? services.web.price * 0.8 : services.web.price}
          isChosen={services.web.isChosen}
          onChange={() => handleCheckbox("web")}
          annualDiscount={annualDiscount}
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
