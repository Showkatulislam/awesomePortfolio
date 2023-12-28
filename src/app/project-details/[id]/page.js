import React from "react";
import projectsData from "../../../../public/projectData";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import { FaArrowAltCircleRight, FaGit, FaGitAlt, FaGithub } from "react-icons/fa";

const page = ({ params }) => {
  const { id } = params;
  const project = projectsData.find((pro) => pro.id === Number(id));

  return (
    <div className="flex items-center justify-around  gap-11 mx-auto text-zinc-400 my-24">
      <div className="flex-1">
        <Image
          className="object-cover h-80 md:h-80"
          src={project.image}
          alt="project-image"
          width={400}
          height={400}
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 max-w-md p-2">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p>
          {project.description}
        </p>
        <div className="flex">
          <li className="w-8 h-8 list-none">
            <CodeBracketIcon />
          </li>
          <li className="w-8 h-8 list-none ml-10">
            <EyeIcon />
          </li>
        </div>
            <div>
                <h1 className="text-xl font-bold mb-2 ">Technology</h1>
                <div className="flex flex-col space-y-4">
                    {
                        project.technology.map(tech=><p className="flex items-center gap-5" key={tech}><FaArrowAltCircleRight className="text-indigo-500"/> {tech}</p>)
                    }
                </div>
            </div>
      </div>
    </div>
  );
};

export default page;
