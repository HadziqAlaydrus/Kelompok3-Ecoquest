import React from "react";
import image2 from "../assets/home.png";
import circle from "../assets/circle.svg";
import Image from "react";

function Home() {
  return (
    <div class="max-w-screen p-14 bg-gradient-to-br from-[#079D1D] to-[#3A19BB] pt-36">
      <div class="grid grid-cols-2">
        <div class="mt-3 test-justify">
          <a href="/">
            <h1 class="mb-2 text-8xl font-bold tracking-tight text-white dark:text-white pt-36">
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
            href="/login"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white"
          >
            Daftar Sekarang
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
        <div class="flex items-end justify-end">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
