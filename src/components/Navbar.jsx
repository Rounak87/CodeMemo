import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10  text-2xl bg-gray-900 text-white py-3 rounded-lg shadow-lg">
      <NavLink to="/"
       className={({isActive})=>`px-4 py-2 rounded-lg hover:text-amber-300 transition-colors
       ${isActive ? 'text-amber-300 font-semibold' : ''}
       `

    }
      >
      Home
      </NavLink>
      <NavLink to="/memos"
       className={({isActive})=>`px-4 py-2 rounded-lg hover:text-amber-300 transition-colors
       ${isActive ? 'text-amber-300 font-semibold' : ''}
       `

    }
      >
      Memos
      </NavLink>
    </div>
  );
};

export default Navbar;
