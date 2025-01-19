import React from "react";
// import Dep from "./Dep";

import budget from "../../assets/Department/budget.svg";
import design from "../../assets/Department/design.svg";
import logistic from "../../assets/Department/logistic.svg";
import development from "../../assets/Department/development.svg";
import maketing from "../../assets/Department/marketing.svg";
import document from "../../assets/Department/document.png";
import event from "../../assets/Department/event.png";
import styles from "./Department.module.css";

const Dep = [
  {
    title: "Departments of",
    image: design,
    name: "Design",
    description:
      "The Design Department is responsible for crafting compelling visual concepts and designs across a variety of projects, including website layouts, logos, and promotional materials, ensuring a cohesive and engaging visual identity.",
  },
  {
    title: "Departments of",
    image: logistic,
    name: "Logistic",
    description:
      "The Logistics Department oversees the coordination and management of all logistical elements for events and projects involving Iot Innovators, including venue selection, transportation, and equipment rentals, ensuring seamless execution and operational efficiency.",
  },
  {
    title: "Departments of",
    image: budget,
    name: "Finance",
    description:
      "The Finance Department is responsible for overseeing Iot Innovators' financial operations, including budgeting, accounting, and financial reporting, to ensure effective financial management and sustainability.",
  },
  {
    title: "Departments of",
    image: development,
    name: "Development",
    description:
      "The Development department is responsible for creating and maintaining the Iot Innovators website, as well as developing various web and mobile applications.",
  },
  {
    title: "Departments of",
    image: maketing,
    name: "Marketing",
    description:
      "The Marketing Department is tasked with promoting Iot Innovators and its projects and events by leveraging diverse marketing channels, including social media, email campaigns, and content marketing, to enhance visibility and engagement.",
  },
  {
    title: "Departments of",
    image: event,
    name: "Event Planning",
    description:
      "The Event Planning Department is responsible for organizing and executing events     for Iot Innovators, including conceptualizing themes, coordinating schedules, and managing event logistics to deliver seamless and memorable experiences.",
  },
  {
    title: "Departments of",
    image: document,
    name: "Documentation",
    description:
      "The Documentation Department is responsible for creating and maintaining comprehensive records of IOT Innovators projects and processes, including design specifications, user guides, and internal protocols, to ensure clarity, consistency, and effective knowledge sharing across the organization.",
  },
];

const Departments = () => {
  return (
    <>
      <div className={`${styles.department}  mt-10 `}>
        <h1 className="flex justify-center font-bold text-4xl text-black cursor-pointer">
          Departments
        </h1>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {Dep.map((d, i) => (
            <div
              key={i}
              className=" w-80 bg-gray-100 px-7 py-10 rounded-md cursor-pointer shadow-md hover:shadow-2xl transition-all ease-in-out duration-300"
            >
              <div className="flex justify-center mb-2">
                <img src={d.image} className="w-10 " />
              </div>
              <h3 className="font-bold text-center">
                {d.title} {d.name}
              </h3>
              <p className="mt-2">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-14 mb-10" />
    </>
  );
};

export default Departments;
