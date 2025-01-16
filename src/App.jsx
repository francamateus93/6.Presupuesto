import React, { useState } from "react";
import Card from "./components/Card";
import Total from "./components/Total";
// import "./App.css";

function App() {
  const [services, setServices] = useState({
    seo: { price: 300, ischosen: false },
    ads: { price: 400, ischosen: false },
    web: { price: 500, ischosen: false },
  });

  const handleCheckbox = (service) => {
    setServices((serv) => ({
      ...serv,
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
    <main>
      <h1 className="text-2xl font-bold text-center">Aconsegueix la millor qualitat</h1>
      <div className="mx-auto max-w-xl">
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
      </div>
    </main>
  );
}

export default App;
