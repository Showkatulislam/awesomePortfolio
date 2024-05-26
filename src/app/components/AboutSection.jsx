"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import img from "public/images/about-image.png";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex space-x-20">
        <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>Node js</li>
        <li>C and C++</li>
      </ul>
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next js</li>
        <li>Django</li>
        <li>Express</li>
      </ul>
      <ul className="list-disc pl-2">
        <li>AWS</li>
        <li>Docker</li>
        <li>Prisma</li>
        <li>PostgreSQL</li>
      </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.sc in Computer Science & Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programing Hero</li>
        <li>InternShip From Alchemey Sofware Limited</li>
        <li>Master Non-Linear Data Structure and Algorithm(codedamn)</li>
        <li>Master Linear Data Structure and Algorithm(codedamn)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-zinc-300" id="about">
      <div className="md:grid md:grid-cols-2 gap-8   p-6 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Image src={img} alt="about" className="mt-10" />
        </div>
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify text-gray-400">
          Hi! I&rsquo;m Showkatul Islam,I&rsquo;m a full-stack web developer with a passion for building interactive and responsive web experiences.I love the challenge of taking an idea and turning it into a real,functional application.I work with a variety of technologies including JavaScript, React, Node.js, Django,AWS,Docker and more.  
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
