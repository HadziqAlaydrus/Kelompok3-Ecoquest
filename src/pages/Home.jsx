import React, { useEffect } from "react";
import image2 from "../assets/home.png";
import circle from "../assets/circle.svg";
import Faq from "@/components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);
  
  return (
    <div className="max-w-screen p-6 sm:p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-16 sm:pt-36">
      <div className="bg-black bg-opacity-20"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-justify" data-aos="fade-up">
          <a href="/">
            <h1 className="mb-2 text-4xl sm:text-8xl font-bold tracking-tight text-white pt-12 sm:pt-24">
              Dari Sampah <br /> Jadi Cuan
            </h1>
            <p className="mb-6 font-normal text-white text-justify">
              Website pembayaran sampah dengan fitur memberikan tugas sesuai
              permintaan klien dan fitur pengambilan sampah sesuai permintaan
              dapat menjadi alat yang sangat berguna dalam upaya mengelola
              limbah dengan lebih efisien dan efektif. Jadi tunggu apa lagi,
              gabung jadi mitra kami sekarang
            </p>
          </a>
          <a
            href="/request"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-white"
          >
            Request Pengambilan
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-end justify-end sm:-mr-20" data-aos="fade-left">
          <img src={image2} alt="" className="w-full h-auto" />
        </div>
      </div>

      <Faq />
    </div>
  );
}

export default Home;
