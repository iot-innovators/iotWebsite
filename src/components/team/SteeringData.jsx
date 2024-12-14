import React from "react";
import R from "../../assets/team/Radhika.png";

import A from "../../assets/team/Aashish.png";
import B from "../../assets/team/Biroshan.png";
import D from "../../assets/team/Dipen.png";
import Na from "../../assets/team/Naresh.png";
import Ni from "../../assets/team/Nigma.png";
import S from "../../assets/team/Sanam.png";
import Di from "../../assets/team/Dipesh_Shrestha.png";

import { BsEnvelopeAt, BsInstagram, BsLinkedin } from "react-icons/bs";

const steeringData = [
  {
    name: "Radhika Neupane",
    Post: "Steering Leader",
    image: R,
    socialMediaLinks: [
      {
        platform: "Email",
        url: "mailto:np03cs4s220226@heraldcollege.edu.np",
        icon: BsEnvelopeAt,
        style: "text-white hover:text-gray-400 size-4",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/radhika_neupane9/",
        icon: BsInstagram,
        style: "text-white size-4 hover:text-gray-400",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/radhika-neupane-360516240/",
        icon: BsLinkedin,
        style: "text-white size-4 hover:text-gray-400",
      },
    ],
  },
  {
    name: "Radhika Neupane",
    Post: "Steering Leader",
    image: R,
    socialMediaLinks: [
      {
        platform: "Email",
        url: "mailto:np03cs4s220226@heraldcollege.edu.np",
        icon: BsEnvelopeAt,
        style: "text-white hover:text-gray-400 size-4",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/radhika_neupane9/",
        icon: BsInstagram,
        style: "text-white size-4 hover:text-gray-400",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/radhika-neupane-360516240/",
        icon: BsLinkedin,
        style: "text-white size-4 hover:text-gray-400",
      },
    ],
  },
];

const Members = [{ url: A }, { url: B }, { url: D }, { url: Na }, { url: Ni }];

export { Members };

export default steeringData;
