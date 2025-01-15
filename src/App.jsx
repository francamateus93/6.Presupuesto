import { useState } from 'react'
import Card from "./components/Card.jsx"
import Total from "./components/Total.jsx"
import './App.css'

function App() {
  const [services, setServices] = useState(
    {
      seo: { price: 300, isChosen: false },
      ads: { price: 400, isChosen: false },
      web: { price: 500, isChosen: false },
    }
  )

  const handleCheckbox = (service) => {
    setServices((serv) => ({ ...serv, [service]: {
      ...prev[service],
      isChosen: !prev[service].isChosen
      }
    }))
  }

  const totalPrice = Object.values(services)
  .filter((service) => service.isChosen)
  .reduce((sum, service) => sum + service.price, 0)

  return (
    <main>
      <header>
        <img src="" alt="" />
      </header>
      <section>
        <Card
          product="SEO"
          price={300}
          isChosen={services.seo.isChosen}
          onChange={() => handleCheckbox('seo')} />
        <Card
          product="Ads"
          price={400}
          isChosen={services.ads.isChosen}
          onChange={() => handleCheckbox('ads')} />
        <Card
          product="Web"
          price={500}
          isChosen={service.web.isChosen}
          onChange={() => handleCheckbox('web')} />
        <Total
          total={totalPrice} />
      </section>
    </main>
  )
}

export default App
