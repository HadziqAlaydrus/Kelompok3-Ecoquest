import React from "react";
import { RiInstagramFill, RiLandscapeFill } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <footer class="relative bg-blueGray-200  pt-8 pb-3">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-5xl fonat-semibold text-blueGray-700">
                EcoQuest
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6">
                <button
                  class="bg-gray-400 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <RiInstagramFill
                    fill="#97EB63"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-gray-400 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaGithubAlt
                    fill="#97EB63"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                  <i class="fab fa-facebook-square"></i>
                </button>
                <button
                  class="bg-gray-400 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <RiFacebookFill
                    fill="#4267B2"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                  <i class="fab fa-dribbble"></i>
                </button>
                <button
                  class="bg-gray-400 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <RiFacebookFill
                    fill="#4267B2"
                    className="w-5 h-5 hover:scale-150 mx-auto transition-all cursor-pointer"
                  />
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm "
                        href="https://github.com/HadziqAlaydrus/Kelompok3-Ecoquest"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Our Services
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:scale-110 transition-all cursor-pointer text-blueGray-800 font-semibold block pb-2 text-sm"
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
          <hr class="my-6 border-blueGray-300"></hr>
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  EcoQuest{" "}
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blueGray-500 hover:text-blueGray-800"
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
