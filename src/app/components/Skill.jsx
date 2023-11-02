"use client";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Techstack from "./Techstack";
const Skill = () => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };
  return (
    <section className="mb-20" id="skill">
      <h2 className="text-center text-4xl font-bold text-white">
        Skill
      </h2>
      <div className="my-16">
      <h3 className="font-bold text-2xl p-4">My Skillset</h3>
        <Techstack />
      </div>
      <h3 className="text-center font-bold text-2xl mb-4">leetcode star</h3>
      <motion.div variants={cardVariants} className="flex justify-center">
        <ReactMarkdown>
          ![LeetCode
          Stats](https://leetcard.jacoblin.cool/showkatul?theme=dark&font=Syne%20Mono&ext=heatmap)
        </ReactMarkdown>
      </motion.div>
    </section>
  );
};

export default Skill;
