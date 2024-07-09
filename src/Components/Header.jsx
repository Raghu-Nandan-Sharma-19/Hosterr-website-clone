import React from 'react'
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hosterr is Hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between font-lato text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domains</a></li>
        <li><a href="#">Why Hosterr ?</a></li>
      </ul>
        <div className="hidden lg:flex justify-center items-center font-lato gap-6">
            <a className="text-gray-400" href="#">Sign In</a>
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
        </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  )
}

export default Header