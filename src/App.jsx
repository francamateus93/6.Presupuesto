import { useState } from 'react'
import Card from "./components/Card"
// import Total from "./components/Total"
import './App.css'

function App() {
  const [services, setServices] = useState(
    {
      seo: { price: 300, isChosen: false },
      ads: { price: 400, isChosen: false },
      web: { price: 500, isChosen: false },
    }
  )

  // const handleCheckbox = (service) => {
  //   setServices((serv) => ({ ...serv, [service]: {
  //     ...prev[service],
  //     isChosen: !prev[service].isChosen
  //     }
  //   }))
  // }

  return (
    <main>
      <Card />
    </main>
  )
}

export default App
