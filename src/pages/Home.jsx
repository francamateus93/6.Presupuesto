import React from "react";
import { useNavigate } from "react-router-dom";

function Home () {
  const navigate = useNavigate();

  return (
  <div className="container p-8 mx-auto h-screen">
    <div className="flex justify-around items-center h-full">
      <div className="max-w-xl p-4">
        <h1 className="text-6xl font-extrabold tracking-tight">Welcome to our Calculator</h1>
        <p className="text-lg py-5 text-gray-400 leading-normal">This app allows you to easily calculate the cost of different custom services, such as web development, SEO, and more. Select the services you need and adjust the details to get your quote.</p>
        <button 
          onClick={() => navigate("/calculator")}
          className="px-8 py-4 shadow-lg text-center rounded-lg text-white bg-cyan-600 hover:bg-cyan-700"
        >Go to Calculator</button>
      </div>
      <div>
        <div>
          <img 
          src="/benefit-one.png" 
          alt="Hero illustration"
          className="w-86" />
        </div>
      </div>
    </div>
  </div>
  )
}
export default Home