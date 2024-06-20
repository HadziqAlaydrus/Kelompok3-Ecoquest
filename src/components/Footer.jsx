import React from "react";
import { RiInstagramFill, RiLandscapeFill, RiFacebookFill } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="relative bg-blueGray-200 pt-8 pb-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
              <h4 className="text-5xl font-semibold text-blueGray-700">EcoQuest</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button
                  className="bg-gray-400 text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <RiInstagramFill
                    fill="#97EB63"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                </button>
                <button
                  className="bg-gray-400 text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaGithubAlt
                    fill="#97EB63"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                </button>
                <button
                  className="bg-gray-400 text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <RiFacebookFill
                    fill="#4267B2"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                </button>
                <button
                  className="bg-gray-400 text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <RiFacebookFill
                    fill="#4267B2"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full md:w-6/12 lg:w-4/12 px-4 ml-auto mb-6 md:mb-0">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/HadziqAlaydrus/Kelompok3-Ecoquest"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Our Services</span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300"></hr>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  EcoQuest{" "}
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
