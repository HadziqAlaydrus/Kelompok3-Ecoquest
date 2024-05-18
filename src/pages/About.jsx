import React from "react";
import ablogo from "../assets/about.png";

function About() {
  return (
    <div className="max-w-screen p-14 bg-gradient-to-br from-[#079D1D] to-[#3A19BB] pt-36">
      <div className="flex text-justify justify-between gap-8">
        <div className="bg-white flex flex-col justify-between gap-y-12 px-10 py-10 border border-red-300 rounded-3xl text-center">
          <img src={ablogo} alt="" />
          <h2 className="mt-5">
            Environmental <br></br>Awareness <br /> for The Future
          </h2>
        </div>
        <div>
          <h1 className="text-white pt-32 pr-20 text-7xl">What Is EcoQuest?</h1>
          <h3 className="text-white pt-5 pr-20">
            Website pembayaran sampah dengan fitur memberikan tugas sesuai
            permintaan klien dan fitur pengambilan sampah sesuai permintaan
            dapat menjadi alat yang sangat berguna dalam upaya mengelola limbah
            dengan lebih efisien dan efektif. Jadi tunggu apa lagi, gabung jadi
            mitra kami sekarang
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
