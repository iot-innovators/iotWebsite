import React from "react";
import { BsEnvelopeAt, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { Members } from "./SteeringData";

import Na from "../../assets/team/Naresh_Sejwal.jpg";
import Ni from "../../assets/team/Nigma.png";
import R from "../../assets/team/Radhika.png";
import Sb from "../../assets/team/Subash_Bista.png";

import Di from "../../assets/team/Dipesh_Shrestha.png";
import Bisekh from "../../assets/team/Bisekh.jpg";
import Bidhan from "../../assets/team/Bidhan.jpg";
import Rachit from "../../assets/team/Rachit.jpg";
import Jyoti from "../../assets/team/Jyoti_Karanjit.png";
import Bidusi from "../../assets/team/Bidusigurung.png";
import kritika from "../../assets/team/kritika.jpg";
import Siyangla from "../../assets/team/Siyangla.jpg";
import Mohammed from "../../assets/team/Mohammad_Rashid_Siddiqui.jpeg";
import Bibisha from "../../assets/team/Bibisha_sapkota.jpg";
import Nizz from "../../assets/team/Nizz.jpg";
import Tul from "../../assets/team/Tul.png";

import styles from "../team/Team.module.css";

const Team = () => {
  const MentorAndHead = [
    {
      name: "Dipesh Shrestha",
      role: "DevCorps Lead",
      src: Di,
    },
    {
      name: "Subash Bista",
      role: "Lecturer, Academic mentor",
      src: Sb,
    },
  ];

  const lead = [
    {
      name: "Radhika Neupane",
      role: "Co-lead",
      src: R,
    },
    {
      name: "Naresh Sejwal",
      role: "Lead",
      src: Na,
    },
    {
      name: "Ngima Tashi Sherpa",
      role: "Co-Lead",
      src: Ni,
    },
  ];

  const steeringLead = [
    {
      name: "Bisekh karki",
      role: "Steering Leader",
      src: Bisekh,
    },

    {
      name: "Nizz Sharma ",
      role: "Steering Leader",
      src: Nizz,
    },
    {
      name: "Tul Bikram Basnet",
      role: "Steering Leader",
      src: Tul,
    },

    {
      name: "Rachit Paudel",
      role: "Steering Leader",
      src: Rachit,
    },
    {
      name: "Kritika Adhikari",
      role: "Steering Leader",
      src: kritika,
    },
  ];

  const members = [
    {
      name: "Siyangla Bhote",
      role: "Member",
      src: Siyangla,
    },
    {
      name: "Bidhan Sapkota",
      role: "Member",
      src: Bidhan,
    },
    {
      name: "Jyoti Karanjit",
      role: "Member",
      src: Jyoti,
    },
    {
      name: "Bidusi Gurung",
      role: "Member",
      src: Bidusi,
    },
    {
      name: "Mohammed Rashid Siddiqui",
      role: "Member",
      src: Mohammed,
    },
    {
      name: "Bibisha Sapkota",
      role: "Member",
      src: Bibisha,
    },
    {
      name: "Satyam Singh",
      role: "Member",
      src: "",
    },
    {
      name: "Bipul Regmi",
      role: "Member",
      src: "",
    },
  ];

  return (
    <div className="px-10 md:px-24 mt-5 " id="team">
      <div className={styles.meetTeam}>
        <h1
          className={`flex justify-center flex-col md:flex-row items-center font-bold  text-4xl text-black mb-10 cursor-pointer`}
        >
          Meet Our Team
        </h1>
      </div>

      <div className="flex flex-col flex-wrap mb-20">
        {/* Head */}
        <h1 className="text-center font-bold text-2xl mt-10 mb-5">Mentors</h1>
        <div className="mb-2 flex items-center flex-wrap justify-center gap-20">
          {MentorAndHead.map((m, i) => (
            <div
              className="hover:bg-gray-100 px-5 py-5 rounded-md  hover:shadow-2xl hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer"
              key={i}
            >
              <div className="">
                <img src={m.src} className="rounded-lg w-64 h-72" />
                <div className="text-center mt-2">
                  <p className="font-bold">{m.name}</p>
                  <p className="">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full mt-10" />

        {/* Steering leads */}
        <h1 className="text-center font-bold text-2xl mt-10 mb-5">
          Lead and Co-leads
        </h1>
        <div className="mb-2 flex items-center flex-wrap justify-center gap-20">
          {lead.map((m, i) => (
            <div
              className="hover:bg-gray-100 px-5 py-5 rounded-md  hover:shadow-2xl hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer"
              key={i}
            >
              <div className="">
                <img src={m.src} className="rounded-lg w-60" />
                <div className="text-center mt-2">
                  <p className="font-bold">{m.name}</p>
                  <p className="">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full mt-10" />

        {/* Steering leads */}
        <h1 className="text-center font-bold text-2xl mt-10 mb-5">
          Steering leaders
        </h1>
        <div className="mb-2 mt-5 flex items-center flex-wrap justify-center gap-5">
          {steeringLead.map((m, i) => (
            <div
              className="hover:bg-gray-100 px-5 py-5 rounded-md  hover:shadow-2xl hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer"
              key={i}
            >
              <div className="">
                <img src={m.src} className="rounded-lg w-64 h-80" />
                <div className="text-center mt-2">
                  <p className="font-bold">{m.name}</p>
                  <p className="">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="w-full mt-10" />
        {/* Members */}
        <h1 className="text-center font-bold text-2xl mt-10 mb-5">Members</h1>
        <div className="mb-2 flex items-center flex-wrap justify-center gap-6">
          {members.map((m, i) => (
            <div
              className="hover:bg-gray-100 px-2 py-5 rounded-md  hover:shadow-2xl hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer"
              key={i}
            >
              <div className="">
                <img src={m.src} className="rounded-lg w-60 h-80" />
                <div className="text-center mt-2">
                  <p className="font-bold">{m.name}</p>
                  <p className="">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
