import OurTeamCard from "@/components/OurTeamCard";
import React from "react";
import ablogo from "../assets/about.png";

function About() {
  return (
    <div className="max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-36">
      <div className="flex text-justify justify-between gap-8">
        <div className="bg-white flex flex-col justify-between gap-y-16 px-32 py-12 border border-red-300 rounded-3xl text-center">
          <img src={ablogo} alt="" />
          <h2 className="mt-5 mx-auto text-justify">
            Environmental <br></br>Awareness  for<br /> The Future
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
      <OurTeamCard/>
    </div>
  );
}

export default About;
