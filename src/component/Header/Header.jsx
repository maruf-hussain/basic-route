import React, { useState } from 'react'
import { Link } from 'react-router';

export default function Header() {
      const [open, setOpen] = useState(false);
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
     { id: 3, path: "/meals", name: "Meals" },
  ];

  return (
         <nav className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold">MySite</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(link => (
            <li key={link.id}>
              <Link to={link.path} className="hover:text-gray-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-slate-700 px-4 pb-4 space-y-2">
          {links.map(link => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="block py-2 hover:bg-blue-500 rounded"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
