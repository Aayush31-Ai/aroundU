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
            to="/saved"
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "text-[#1f2f2a] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#2f5349] after:rounded-full"
                  : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            Saved
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
        <div className="flex justify-around items-center gap-8">
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
          {/* <div>Roles</div> */}
          <div className="hidden md:flex justify-center gap-6 lg:gap-8 text-lg px-3 py-1.5 border border-gray-200
            text-sm text-gray-700  rounded-full ">
            <li className="relative group list-none flex items-center">
              <div className="flex items-center hover:text-[#7bbfae]">
                <span className="cursor-pointer hover:text-[#7bbfae]">
                  Roles
                </span>
                <div className="">
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="-2 -3 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                <div className="p-[2px] rounded-md bg-gradient-to-r z-50 from-[#b2ecdd] via-[#b2ecdd] to-[#b2ecdd]">
                  <ul className="w-56 bg-[#7bbfae] rounded-md shadow-lg z-50">
                    <li className="px-4 py-3 hover:bg-[#f0f7f5] hover:text-[#B19EEF]"><Link to="/user">User</Link></li>
                    <li className="px-4 py-3 hover:bg-[#f0f7f5] cursor-pointer hover:text-[#B19EEF]"><Link to="/admin">Admin</Link></li>
                    <li className="px-4 py-3 hover:bg-[#f0f7f5] hover:text-[#B19EEF]"><Link to="/serviceprovider">ServiceProvider</Link></li>
                  </ul>
                </div>
              </div>
            </li>
          </div>
        </div>
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
              to="/saved"
              className="block text-sm font-medium text-gray-700"
            >
              Saved
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