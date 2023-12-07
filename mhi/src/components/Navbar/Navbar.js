import React, { useState } from "react";
import Dropmen from "./dropmen";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [drop, setdrop] = useState(false);

  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/ieeel.png"
              className="h-8"
              alt="ieee Logo"
              height={50}
            />
          </a>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-4xl text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={() => {
              setdrop(!drop);
            }}
          >
            <span className="sr-only">Open main menu</span>
            {drop ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
          {drop && <Dropmen />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
