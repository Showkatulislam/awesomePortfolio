"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {FaFacebook} from 'react-icons/fa'
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent text-2xl sm:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-500">
              Hello, I&apos;m {"SHOWKATUL ISLAM"}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "MERN Developer",
                1000,
                "React Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  justify-center md:justify-start gap-2 my-3"
          >
            <a>
              <Image
                src="/github-icon.svg"
                alt="github"
                width={50}
                height={50}
              />
            </a>
            <a>
              <Image
                src="/linkedin-icon.svg"
                alt="github"
                width={50}
                height={50}
              />
            </a>
            <a className="text-white ">
              <FaFacebook className="w-12 h-12"/>
            </a>
          </motion.div>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/https://docs.google.com/document/d/16UOfCcn0o1HX9_b_SxE3AbUNy2hD64gfr4OvoDVB-NM/edit"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              download={'https://docs.google.com/document/d/16UOfCcn0o1HX9_b_SxE3AbUNy2hD64gfr4OvoDVB-NM/edit'}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
