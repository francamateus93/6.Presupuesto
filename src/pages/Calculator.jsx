import React, { useState } from "react";
import Card from "../components/Card"
import Total from "../components/Total";
import Options from "../components/Options";
import Budget from "../components/Budget";
import BudgetList from "../components/BudgetList";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate()

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

  // Handle Budget
    const saveBudget = (newBudget) => {
      const budgetWithId = {...newBudget, id: idBudget}
      setBudgets((prev) => [...prev, budgetWithId]);
      setIdBudget((id) => id + 1);
    }

  // Handle Checkbox
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
    const webPrice = 500 + (pages + languages) * 30
    const totalPrice = Object.entries(services).reduce((sum, [key, service]) => {
        if (key === "web" && service.isChosen) {
        return sum + webPrice;
        }
        return service.isChosen ? sum + service.price : sum
      }, 0) ;

  return (
      <main className="flex flex-col justify-center gap-12">
        <header className="mx-auto">
          <div>
            <button
              onClick={() => navigate("/home")}
              className=""
              >Back home</button>
          </div>
          {/* <img
            src="/header-img.png"
            alt="Header photo with notebook"
            className="rounded-xl mx-auto"
          /> */}
        </header>
        <section className="flex flex-col gap-6">
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
            addNewBudget={saveBudget}
            services={services} 
            totalPrice={totalPrice}/>
        </section> 

      <section className="flex flex-col gap-6">
        <BudgetList
          budgets={budgets} />
        </section>
      </main>
  )
}

export default Calculator