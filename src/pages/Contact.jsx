import React from "react";
import { RiInstagramFill, RiLandscapeFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import logo from "../assets/greenppl.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    aos.init({
      duration: 2000, // durasi animasi dalam milidetik
      easing: 'ease-in-out', // Jenis easing untuk animasi
      once: true, // Animasi hanya berjalan sekali
      delay: 100, // Penundaan sebelum animasi dimulai dalam milidetik
    });
  }, []);

  return (
    <section className="max-w-screen bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36 ">
      <div className="bg-gray-200 w-screen rounded-lg p-14 grid grid-cols-2">
        <div className="p-10" data-aos="fade-up">
          <h1 className="font-bold text-7xl my-10 ml-20">Contact</h1>
          <ul className="font-semibold text-xl ml-32 list-disc flex flex-col gap-3">
            <li>Jl. Cempaka Wangi XIX No. 40A </li>
            <li>Telp 0218848489 </li>
            <li>ecoquest@gmail.com </li>
          </ul>

          <div className="flex flex-col my-10 ml-28">
            <div className="flex items-center mb-4">
              <RiInstagramFill
                fill="#E1306C"
                className="w-8 h-8 hover:scale-150 transition-all cursor-pointer"
              />
              <span className="font-semibold text-xl ml-2">@ecoquest</span>
            </div>

            <div className="flex items-center ">
              <RiFacebookFill
                fill="#4267B2"
                className="w-8 h-8 hover:scale-150 transition-all cursor-pointer"
              />
              <span className="font-semibold text-xl ml-2">@ecoquest</span>
            </div>
          </div>
        </div>
        <div className="flex -mr-[100px]">
          <img src={logo} alt="" data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
