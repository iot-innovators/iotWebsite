import React from "react";
import { BsEnvelopeAt, BsInstagram, BsLinkedin } from "react-icons/bs";

import A from "../../assets/team/Aashish.png";
import B from "../../assets/team/Biroshan.png";
import D from "../../assets/team/Dipen.png";
import Na from "../../assets/team/Naresh.png";
import Ni from "../../assets/team/Nigma.png";
import R from "../../assets/team/Radhika.png";
import S from "../../assets/team/Sanam.png";
import Di from "../../assets/team/Dipesh_Shrestha.png";

const Team = () => {
  return (
    <div className="px-10 md:px-24">
      <h1 className="flex justify-center font-bold text-4xl text-white mb-10">
        Meet Our Team
      </h1>

      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <img src={Di} alt="Dev_Head" className="h-[180px]  object-cover" />
          <div className="flex items-center flex-col ">
            <p className="font-medium">Mr.Dipesh Shrestha</p>
            <p className="">DevCorps Head</p>
          </div>

          <div className="flex gap-3 ">
            <a
              href="mailto:dipesh.shrestha@heraldcollege.edu.np"
              target="_blank"
            >
              <BsEnvelopeAt className="text-white hover:text-gray-400 size-4 " />
            </a>
            <a
              href="https://www.instagram.com/username__dipesh.sh/"
              target="_blank"
            >
              <BsInstagram className="text-white size-4 hover:text-gray-400  " />
            </a>
            <a
              href="https://www.linkedin.com/in/dipeshshrestha1221/"
              target="_blank"
            >
              <BsLinkedin className="text-white size-4 hover:text-gray-400 " />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={Di} alt="Dev_Head" className="h-[180px]  object-cover" />
          <div className="flex items-center flex-col ">
            <p className="font-medium">Mr.Dipesh Shrestha</p>
            <p className="">DevCorps Head</p>
          </div>

          <div className="flex gap-3 ">
            <a
              href="mailto:dipesh.shrestha@heraldcollege.edu.np"
              target="_blank"
            >
              <BsEnvelopeAt className="text-white hover:text-gray-400 size-4 " />
            </a>
            <a
              href="https://www.instagram.com/username__dipesh.sh/"
              target="_blank"
            >
              <BsInstagram className="text-white size-4 hover:text-gray-400  " />
            </a>
            <a
              href="https://www.linkedin.com/in/dipeshshrestha1221/"
              target="_blank"
            >
              <BsLinkedin className="text-white size-4 hover:text-gray-400 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
