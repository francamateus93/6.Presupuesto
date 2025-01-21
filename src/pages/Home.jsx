import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home () {
  const navigate = useNavigate();

  return (
  <main className="flex flex-col justify-center h-screen mx-auto">
    <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto ">
      <Link to="/home">
        <img 
        src="/favicon.png"
        alt="logo"
        className="w-10 h-10" />  
      </Link>
      <div className="font-semibold flex items-center gap-3">
        <Link to="/home" className=" hover:text-cyan-700"><span>Home</span></Link>
        <Link to="/calculator" className=" hover:text-cyan-700"><span>Calculator</span></Link>
        <button 
          onClick={() => navigate("/calculator")}
          className="text-sm font-normal px-6 py-2 ml-4 text-center rounded-lg text-white bg-cyan-600 hover:bg-cyan-700"
          >Get Started</button>
      </div>
    </nav>
    <section className="flex justify-around items-center h-screen">
      <div className="max-w-xl p-4">
        <h1 className="text-6xl font-extrabold tracking-tight">Welcome to our Calculator</h1>
        <p className="text-lg py-5 text-gray-400 leading-normal">This app allows you to easily calculate the cost of different custom services, such as web development, SEO, and more. Select the services you need and adjust the details to get your quote.</p>
        <button 
          onClick={() => navigate("/calculator")}
          className="px-8 py-4 shadow-lg text-center rounded-lg text-white bg-cyan-600 hover:bg-cyan-700"
        >Go to Calculator</button>
      </div>
      <div className="">
        <img 
        src="/benefit-one.png" 
        alt="Hero illustration"
        className="min-w-92" />
      </div>
    </section>
  </main>
  )
}
export default Home