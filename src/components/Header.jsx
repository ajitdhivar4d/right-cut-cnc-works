import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X, Home, Layers, Images, Phone } from "lucide-react";

import logo from "../assets/RCCW-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const bottomLinks = [
    { name: "Home", path: "/", icon: Home, end: true },
    { name: "Services", path: "/services", icon: Layers },
    { name: "Gallery", path: "/gallery", icon: Images },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const activeClass = "text-[#c27627]";
  const inactiveClass = "text-[#49220d]";

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#fffaf0] shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Main Header */}
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center shrink-0"
            >
              <img
                src={logo}
                alt="Right Cut CNC Works"
                className="h-11 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${
                      isActive ? activeClass : inactiveClass
                    } hover:text-[#c27627]`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setMenuOpen(false);
                }}
                className="h-11 w-11 flex items-center justify-center rounded-full text-[#49220d] hover:bg-[#f1e4d1] transition"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                {searchOpen ? <X size={22} /> : <Search size={22} />}
              </button>

              <button
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setSearchOpen(false);
                }}
                className="lg:hidden h-11 w-11 flex items-center justify-center rounded-full text-[#49220d] hover:bg-[#f1e4d1] transition"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4">
              <input
                type="search"
                placeholder="Search CNC designs..."
                className="w-full rounded-xl border border-[#d8b58b] bg-white px-5 py-3 outline-none focus:border-[#a65b19]"
                autoFocus
              />
            </div>
          )}

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="lg:hidden border-t border-[#e9d8c2] py-3">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.end}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? "bg-[#f1e4d1] text-[#a65b19]"
                          : "text-[#49220d] hover:bg-[#f7eddf]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[#e9d8c2] bg-[#fffaf0] shadow-[0_-4px_15px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4 h-16">
          {bottomLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 text-xs font-semibold transition ${
                    isActive ? activeClass : inactiveClass
                  }`
                }
              >
                <Icon size={21} strokeWidth={2} />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
