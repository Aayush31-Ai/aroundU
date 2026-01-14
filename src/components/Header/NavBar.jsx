import React from "react";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/logo/Logo.jpeg"
              alt="AroundU"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-[#2f5349]">
              Around<span className="text-[#ffc800]">U</span>
            </span>
          </Link>
        </div>

        {/* CENTER — NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
        <NavLink
  to="/services"
  className={({ isActive }) =>
    `relative text-sm font-medium transition ${
      isActive
        ? "text-[#1f2f2a] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#2f5349] after:rounded-full"
        : "text-gray-600 hover:text-gray-900"
    }`
  }
>
  Services
</NavLink>

<NavLink
  to="/about"
  className={({ isActive }) =>
    `relative text-sm font-medium transition ${
      isActive
        ? "text-[#1f2f2a] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#2f5349] after:rounded-full"
        : "text-gray-600 hover:text-gray-900"
    }`
  }
>
  About
</NavLink>
        </div>

        {/* RIGHT — LOCATION */}
        <button
          className="
            hidden md:flex items-center gap-2
            px-3 py-1.5
            rounded-full
            border border-gray-200
            text-sm text-gray-700
            hover:bg-gray-100 transition
          "
        >
          <MapPin size={16} className="text-[#2f5349]" />
          <span className="max-w-[160px] truncate">
            Mumbai, Maharashtra
          </span>
          <ChevronDown size={14} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <NavLink
              to="/services"
              className="block text-sm font-medium text-gray-700"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className="block text-sm font-medium text-gray-700"
            >
              About
            </NavLink>

            <button className="mt-3 w-full flex items-center justify-between px-4 py-2 rounded-lg border text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#2f5349]" />
                Mumbai, Maharashtra
              </span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
