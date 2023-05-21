import React from "react";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen "
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ayush Jaipuriyar.
        <span className="text-2xl text-textDark mt-2 lgl:mt-4 w-3/4">
          As a MERN developer, I&apos;m like a clumsy magician attempting
          tricks, occasionally pulling off miracles amidst a sea of errors.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am passionate software developer specializing in full-stack web
        development with the MERN stack. My expertise lies in languages like
        C/C++, Python, and JavaScript, and I have successfully built websites
        and developed a movie recommendation system.
        <br />I am committed to continuous learning and growth in the field,
        always seeking new challenges to enhance my skills and deliver impactful
        solutions.
      </motion.p>
      <motion.button
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Checkout my Projects!
      </motion.button>
    </section>
  );
};

export default Banner;
