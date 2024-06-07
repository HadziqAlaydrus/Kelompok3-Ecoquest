import React, { useEffect } from "react";
import image2 from "../assets/home.png";
import circle from "../assets/circle.svg";
import Image from "react";
import Faq from "@/components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam milidetik
      once: true, // animasi hanya berjalan sekali
      easing: 'ease-in-out', // Jenis easing untuk animasi
      delay: 100, // Penundaan sebelum animasi dimulai dalam milidetik
    });
  }, []);
  
  return (
    <div class=" max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36">
      <div class="bg-black bg-opacity-20"></div>
      <div class="grid grid-cols-2">
        <div class="text-justify" data-aos="fade-up">
          <a href="/">
            <h1 class="mb-2 text-8xl font-bold tracking-tight text-white dark:text-white pt-24">
              Dari Sampah <br /> Jadi Cuan
            </h1>
            <p class="mb-6 font-normal text-white dark:text-gray-400 text-justify">
              Website pembayaran sampah dengan fitur memberikan tugas sesuai
              permintaan klien dan fitur pengambilan sampah sesuai permintaan
              dapat menjadi alat yang sangat berguna dalam upaya mengelola
              limbah dengan lebih efisien dan efektif. Jadi tunggu apa lagi,
              gabung jadi mitra kami sekarang
            </p>
          </a>
          <a
            href="/request"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white"
          >
            Request Pengambilan
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div class="flex items-end justify-end -mr-20">
          <img src={image2} alt="" data-aos="fade-left" />
        </div>
      </div>

      <Faq />
    </div>
  );
}

export default Home;
