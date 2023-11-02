import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiJavascript,
  DiMysql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiHeroku,
  SiTypescript,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
const Techstack = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-9 gap-10 max-w-6xl">
      <div className="w-10 rounded-lg h-10 p-3">
        <CgCPlusPlus className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiJavascript1 className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiPython className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiJava className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiNodejs className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiReact className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <SiNextdotjs className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiMysql className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiMongodb className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <SiFirebase className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <SiTailwindcss className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <SiBootstrap className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <SiHeroku className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiGit className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <SiTypescript className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiGit className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiHtml5 className="text-5xl font-extrabold" />
      </div>
      <div className="w-10 h-10 p-3">
        <DiCss3 className="text-5xl font-extrabold" />
      </div>
  
    </div>
  );
};

export default Techstack;
