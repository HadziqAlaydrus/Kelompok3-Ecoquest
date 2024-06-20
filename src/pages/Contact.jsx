import React from "react";
import { RiInstagramFill, RiLandscapeFill, RiFacebookFill } from "react-icons/ri";
import logo from "../assets/greenppl.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    aos.init({
      duration: 2000, // duration of the animation in milliseconds
      easing: 'ease-in-out', // type of easing for the animation
      once: true, // animation runs only once
      delay: 100, // delay before the animation starts in milliseconds
    });
  }, []);

  return (
    <section className="bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36">
      <div className="bg-gray-200 w-full rounded-lg p-6 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
        <div className="p-4 md:p-10" data-aos="fade-up">
          <h1 className="font-bold text-4xl md:text-7xl my-4 md:my-10 text-center md:text-left text-black">Contact</h1>
          <ul className="font-semibold text-lg md:text-xl text-black list-disc flex flex-col gap-3 text-center md:text-left">
            <li>Jl. Cempaka Wangi XIX No. 40A</li>
            <li>Telp 0218848489</li>
            <li>ecoquest@gmail.com</li>
          </ul>
          <div className="flex flex-col items-center md:items-start my-6 md:my-10">
            <div className="flex items-center mb-4">
              <RiInstagramFill
                fill="#E1306C"
                className="w-8 h-8 hover:scale-150 transition-all cursor-pointer"
              />
              <span className="font-semibold text-lg md:text-xl ml-2 text-black">@ecoquest</span>
            </div>
            <div className="flex items-center">
              <RiFacebookFill
                fill="#4267B2"
                className="w-8 h-8 hover:scale-150 transition-all cursor-pointer"
              />
              <span className="font-semibold text-lg md:text-xl ml-2 text-black">@ecoquest</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify- -mr-40">
          <img src={logo} alt="EcoQuest Logo" className="w-48 md:w-auto" data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
