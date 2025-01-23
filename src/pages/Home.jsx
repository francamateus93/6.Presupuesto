import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col justify-center h-screen mx-auto">
      <Navbar />
      <section className="flex flex-col md:flex-row justify-around items-center h-screen mx-auto">
        <div className="container flex flex-col md:flex-row gap-10 lg:gap-4 items-center justify-center p-8 mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Welcome to our Calculator
            </h1>
            <p className="text-sm md:text-lg py-5 text-gray-400 leading-normal w-full md:w-3/4 tracking-tight">
              This app allows you to easily calculate the cost of different
              custom services, such as web development, SEO, and more. Select
              the services you need and adjust the details to get your quote.
            </p>
            <button
              onClick={() => navigate("/calculator")}
              className="px-8 py-4 shadow-lg text-center rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition"
            >
              Go to Calculator
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/benefit-one.png"
              alt="Hero illustration"
              className="min-w-92"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
