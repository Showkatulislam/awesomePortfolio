import React from "react";
import projectsData from "../../../../public/projectData";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import { FaGit, FaGitAlt, FaGithub } from "react-icons/fa";

const page = ({ params }) => {
  const { id } = params;
  const project = projectsData.find((pro) => pro.id === Number(id));

  return (
    <div className="flex items-center justify-around  m-32 mx-auto">
      <div className="flex-1">
        <Image
          className="object-cover"
          src={project.image}
          alt="project-image"
          width={400}
          height={400}
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 max-w-md p-2">
        <h3 className="text-2xl font-bold">{project.description}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          explicabo deleniti dolor, eveniet eius sit reprehenderit earum fugiat
          id consequatur ea sapiente nostrum ad non? Porro neque tempora
          exercitationem incidunt..{" "}
        </p>
        <div className="flex justify-between">
          <li className="w-8 h-8 list-none">
            <CodeBracketIcon />
          </li>
          <li className="w-8 h-8 list-none">
            <EyeIcon />
          </li>
          <li className="list-none">
            <a href="" className="text-2xl flex justify-between">
              <FaGithub /> Frontend
            </a>
          </li>
          <li className="list-none">
            <a href="" className="text-2xl flex justify-between">
              <FaGithub /> Backend
            </a>
          </li>
        </div>
            <div>
                <h1 className="text-xl font-bold">Technology</h1>
                <div className="flex justify-between items-center gap-2 mt-2">
                    {
                        project.technology.map(tech=><p key={tech}>{tech}</p>)
                    }
                </div>
            </div>
      </div>
    </div>
  );
};

export default page;
