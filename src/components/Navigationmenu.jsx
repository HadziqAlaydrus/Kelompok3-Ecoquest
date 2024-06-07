import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image 1.png";
import { useState } from "react";

const Navigationmenu = () => {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      if (scrollPosition) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`backdrop-blur fixed w-screen z-50 transition-all ${
          isScroll ? "" : "bg-transparent text-white"
        }`}
      >
        <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-20 " alt="EcoQuest Logo" />
            <span class="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">
              EcoQuest
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class="hidden w-full md:block md:w-auto bg-transparent "
            id="navbar-default"
          >
            <ul class="font-semibold flex flex-col p-4 md:p-0 mt-4 mr-36 border border-gray-100 rounded-lg bg-transparant md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparant dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:hover:text-black"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <button href="/request">
            {" "}
            <a
              href="/request"
              class="font-semibold block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Request
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigationmenu;
