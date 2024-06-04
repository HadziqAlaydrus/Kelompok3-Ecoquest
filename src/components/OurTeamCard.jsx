import React from "react";
import react, { useEffect } from "react";
import logo from "../assets/logo.jpeg";
import hadziq from "../assets/hadziq2.jpg";
import suci from "../assets/Suci.jpg";
import anang from "../assets/Anang_Arif_Hibaturrahman.jpg";
import rizieq from "../assets/rizieq.jpg"
import raihan from "../assets/raihan aji.jpg";
import ibnu from "../assets/Ibnu Adeng Kurnia.jpg";
import novian from "../assets/Nofian Pratama.jpg";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiLandscapeFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    img: anang,
    name: "Anang Arif Hibaturrahman",
    role: "Leader",
    github: "https://github.com/anangarif09",
    linkedin: "http://www.linkedin.com/in/anang-arif-hibaturrahman-b468931a6",
    instagram:
      "https://www.instagram.com/anangarif_h?igsh=MXBrN3hwY2F4OGgzcw==",
  },
  {
    img: raihan,
    name: "Raihan Aji Putra Darmawan",
    role: "Co-Leader",
    github: "",
    linkedin: "http://linkedin.com/in/raihanajip-darmawan/",
    instagram: "https://www.instagram.com/hi_banghan/",
  },
  {
    img: hadziq,
    name: "Abubakar Hadziq Alaydrus",
    role: "Developer",
    github: "https://github.com/HadziqAlaydrus",
    linkedin: "https://www.linkedin.com/in/abubakar-hadziq-alaydrus-a3b24722b/",
    instagram: "https://www.instagram.com/hadziqalaydrus/",
  },
  {
    img:suci,
    name: "Suci Fitrianti",
    role: "Developer",
    github: "https://github.com/Sucifitrianti",
    linkedin: "https://www.linkedin.com/in/suci-fitrianti-66b6272bb",
    instagram: "https://www.instagram.com/sciftrianti02?igsh=aWU4M3N6OXg3Nnh6",
  },
  {
    img: rizieq,
    name: "Muhammad Chair Rizieq",
    role: "UI/UX Designer",
    github: "",
    linkedin: "",
    instagram: "https://www.instagram.com/rziieqm_",
  },
  {
    img: ibnu,
    name: "Ibnu Adeng Kurnia",
    role: "Product Requirement Document",
    github: "https://github.com/ibnuadeng03",
    linkedin: "http://www.linkedin.com/in/ibnu-adeng-kurnia-351648301",
    instagram: "https://www.instagram.com/ibnuadeng0303/",
  },
  {
    img: novian,
    name: "Novian Pratama",
    role: "Product development and implementation",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/nofian-pratama-33827a2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/nofian.prtm",
  },
];

const OurTeamCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className=" bg-transparant h-full">
      <h1 className="text-white font-bold text-[30px] text-center py-36">
        EcoQuest Developer Team
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-center items-center py-24">
        {team.slice(0, 4).map((profile, index) => (
          <div
            key={index}
            className="bg-gray-900 w-[300px] mb-36 mx-auto p-3 rounded-xl border-2 border-[#97EB63]"
            data-aos="fade-up"
          >
            <img
              className="mx-auto -mt-32 rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
              src={profile.img}
              alt=""
            />
            <h3 className="text-center text-white font-bold text-[20px] md:mt-5">
              {profile.name}
            </h3>
            <div className="w-full bg-[#97EB63] h-0.5"></div>
            <p className="text-center text-[#97EB63] font-light text-[14px]">
              {profile.role}
            </p>
            <div className="flex justify-center items-center gap-5 py-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubAlt
                  fill="#97EB63"
                  className="w-5 h-5 hover:scale-110 transition-all cursor-pointer"
                />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  fill="#97EB63"
                  className="w-5 h-5 hover:scale-110 transition-all cursor-pointer"
                />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill
                  fill="#97EB63"
                  className="w-5 h-5 hover:scale-110 transition-all cursor-pointer"
                />
              </a>
            </div>
          </div>
        ))}
        <div className="col-span-4 flex justify-center">
          <div className="flex justify-center gap-16 mt-5">
            {team.slice(4).map((profile, index) => (
              <div
                key={index + 4}
                className="bg-gray-900 w-[300px] mb-36 p-3 rounded-xl border-2 border-[#97EB63]"
                data-aos="fade-up"
              >
                <img
                  className="mx-auto -mt-32 rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
                  src={profile.img}
                  alt=""
                />
                <h3 className="text-center text-white font-bold text-[20px] md:mt-5">
                  {profile.name}
                </h3>
                <div className="w-full bg-[#97EB63] h-0.5"></div>
                <p className="text-center text-[#97EB63] font-light text-[14px]">
                  {profile.role}
                </p>
                <div className="flex justify-center items-center gap-5 py-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubAlt
                      fill="#97EB63"
                      className="w-5 h-5 hover:scale-200 transition-all cursor-pointer"
                    />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      fill="#97EB63"
                      className="w-5 h-5 hover:scale-200 transition-all cursor-pointer"
                    />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiInstagramFill
                      fill="#97EB63"
                      className="w-5 h-5 hover:scale-200 transition-all cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamCard;
