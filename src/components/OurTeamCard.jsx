import React from "react";
import logo from "../assets/logo.jpeg";
import hadziq from  "../assets/hadziq2.jpg"
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiLandscapeFill } from "react-icons/ri";

const team = [
  {
    img: logo,
    name: "Suci Fitrianti",
    role: "Leader",
  },
  {
    img: hadziq,
    name: "Abubakar Hadziq",
    role: "Developer",
  },
  {
    img: logo,
    name: "Anang Arif Hibaturrahman",
    role: "Developer",
  },
  {
    img: logo,
    name: "Muhammad Chair Rizieq",
    role: "Developer",
  },
  {
    img: logo,
    name:"Raihan Aji",
    role:"Developer",
  },
  {
    img: logo,
    name:"Ibnu Adeng",
    role:"Developer",
  },
  {
    img:logo,
    name:"Novian Pratama",
    role: "Developer",
  }
];

const OurTeamCard = () => {
  return (
    <section className=' bg-transparant h-full'>
      <h1 className='text-white font-bold text-[30px] text-center py-24'>
        Our Team
      </h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-4  justify-center items-center  py-24'>
        {team.map((profile, index) => (
          <div
            key={index}
            className='bg-gray-900 w-[300px] mb-36 mx-auto  p-3 rounded-xl border-2 border-[#97EB63] '
          >
            <img
              className='mx-auto -mt-32 rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover'
              src={profile.img}
              alt=''
            />
            <h3 className='text-center text-white font-bold text-[20px] md:mt-5'>
              {profile.name}
            </h3>
            <div className='w-full bg-[#97EB63] h-0.5'></div>
            <p className='text-center text-[#97EB63] font-light text-[14px]'>
              {profile.role}
            </p>
            <div className='flex justify-center items-center gap-5 py-2'>
              <FaGithubAlt
                href='https://github.com/HadziqAlaydrus'
                fill='#97EB63'
                className='w-5 h-5 hover:scale-110 transition-all cursor-pointer'
              />
              <FaLinkedin
                href='/'
                fill='#97EB63'
                className='w-5 h-5 hover:scale-110 transition-all cursor-pointer'
              />
              <RiInstagramFill
                href='/'
                fill='#97EB63'
                className='w-5 h-5 hover:scale-110 transition-all cursor-pointer'
              />
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default OurTeamCard;