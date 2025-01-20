import React from "react";
import Card from "../components/Card"
import Total from "../components/Total";
import Options from "../components/Options";
// import Header from "/"
import { useNavigate } from "react-router-dom";

function Calculator() {

// Navigation
  const navigate = useNavigate()

// States
  const [services, setServices] = useState({
      seo: { price: 300, isChosen: false },
      ads: { price: 400, isChosen: false },
      web: { price: 500, isChosen: false },
    });
    
  const [pages, setPages] = useState(1)
  const [languages, setLanguages] = useState(1)
  
    const handleCheckbox = (service) => {
      setServices((prev) => ({
        ...prev,
        [service]: {
          ...prev[service],
          isChosen: !prev[service].isChosen,
        },
      }));
    };
  
    const webPrice = 500 + (pages + languages) * 30
    const totalPrice = Object.entries(services).reduce((sum, [key, service]) => {
        if (key === "web" && service.isChosen) {
        return sum + webPrice;
        }
        return service.isChosen ? sum + service.price : sum
      }, 0) ;

  return (
      <>
        <header className="mx-auto">
          <div>
            <button
              onClick={() => navigate("/home")}
              className=""
              >Back home</button>
          </div>
          <img
            src="/header-img.png"
            alt="Header photo with notebook"
            className="rounded-xl mx-auto"
          />
        </header>
        <section className="flex flex-col gap-6">
          <Card
            product="SEO"
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
        </section> 
      </>
  )
}

export default Calculator