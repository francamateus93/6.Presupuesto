import React, { useState } from "react";
import Card from "./components/Card";
import Total from "./components/Total";
import Header from "./assets/header-img.png"
import "./index.css";

function App() {
  const [services, setServices] = useState({
    seo: { price: 300, ischosen: false },
    ads: { price: 400, ischosen: false },
    web: { price: 500, ischosen: false },
  });

  const handleCheckbox = (service) => {
    setServices((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        ischosen: !prev[service].ischosen,
      },
    }));
  };

  const totalPrice = Object.values(services)
    .filter((service) => service.ischosen)
    .reduce((sum, service) => sum + service.price, 0);

  return (
    <main className="max-auto">
      <header className="my-8">
      <img 
        src={Header}
        alt="Header photo with notebook" 
        className="rounded-xl mx-auto"/>
      </header>
      <section className="flex flex-col gap-6">
        <Card
          product="SEO"
          price={300}
          isChosen={services.seo.ischosen}
          onChange={() => handleCheckbox("seo")}
        />
        <Card
          product="Ads"
          price={400}
          isChosen={services.ads.ischosen}
          onChange={() => handleCheckbox("ads")}
        />
        <Card
          product="Web"
          price={500}
          isChosen={services.web.ischosen}
          onChange={() => handleCheckbox("web")}
        />
        <Total total={totalPrice} />
      </section>
    </main>
  );
}

export default App;
