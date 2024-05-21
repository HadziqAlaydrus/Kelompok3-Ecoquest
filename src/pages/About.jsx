import OurTeamCard from "@/components/OurTeamCard";
import React from "react";
import ablogo from "../assets/about.png";

function About() {
  return (
    <div className="max-w-screen p-14 bg-gradient-to-tl from-cyan-800 via-teal-500 to-lime-500 pt-60">
      <div className="flex text-justify justify-between gap-8">
        <div className="bg-white flex flex-col justify-between gap-y-16 px-48 py-44 shadow-2xl rounded-3xl text-center">
          <img src={ablogo} alt=""  />
          <h2 className="mt-5 mx-auto text-justify">
            Environmental <br></br>Awareness  for<br /> The Future
          </h2>
        </div>
        <div>
          <h1 className="text-white pt-36 pr-20 text-7xl">What Is EcoQuest?</h1>
          <h3 className="text-white pt-5 pr-20 text-xl">
          EcoQuest didirikan dengan visi untuk menjadikan teknologi cloud sebagai alat utama dalam mencapai tujuan keberlanjutan. Kami memahami bahwa integrasi Environmental, Social, and Governance (ESG) ke dalam infrastruktur digital  baik untuk lingkungan sekitarnya.
          Dengan bekerja sama tim ahli yang berdedikasi dan teknologi canggih, EcoQuest  menyediakan solusi inovatif dan berkomitmen untuk membantu Anda meminimalkan jejak karbon, meningkatkan efisiensi operasional, dan mendukung praktik bisnis yang etis dan bertanggung jawab.
          Bergabunglah dengan EcoQuest   dan jadilah bagian dari perubahan positif di dunia digital. Bersama-sama, kita bisa menciptakan masa depan yang lebih berkelanjutan!.
          </h3>
        </div>
      </div>
      <OurTeamCard/>
    </div>
  );
}

export default About;
