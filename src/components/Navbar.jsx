import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto">
      <Link to="/home">
        <img src="/favicon.png" alt="logo" className="w-14 h-14" />
      </Link>
      <div className="font-semibold flex items-center gap-6">
        <button
          onClick={() => navigate("/calculator")}
          className="font-normal px-6 py-2 ml-4 text-center rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
