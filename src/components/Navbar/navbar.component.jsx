import React from "react";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="tetx-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-500 text-sm flex items-center">
            Guntakal <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white p-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports, and Activities "
      />
    </div>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-2/5 gap-3">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white p-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports, and Activities "
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-200 hover:text-white flex items-center">
            Guntakal <BiChevronDown />
          </span>
          <button className="px-2 py-1 w-20 text-sm rounded text-white bg-red-600">Sign in</button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium Screen */}
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
