import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = (props: {}) => {
  const NavLinkStyle =
    "items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 text-xl nav-link";
  return (
    <div
      className="
        w-full 
        shadow-navbarShadow 
        h-20 
        lg:h-[12vh] 
        sticky 
        top-0 
        z-50 
        bg-bodyColor 
        px-4"
    >
      <div
        className="
          max-w-container 
          h-full 
          mx-auto
          py-10
          font-titleFont 
          flex 
          items-center 
          justify-between"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} className="w-20" alt="logo"></Image>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex  gap-7">
            <Link href="#home" className={NavLinkStyle}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link className={NavLinkStyle} href="#about">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                About
              </motion.li>
            </Link>
            <Link className={NavLinkStyle} href="#experience">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link className={NavLinkStyle} href="#project">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Project
              </motion.li>
            </Link>
            <Link className={NavLinkStyle} href="#ceontact">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <Link href="/api/getAPI" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="
            px-4 
            py-2 
            rounded-md 
            text-textYellow 
            text-xl
            border 
            border-textGreen 
            hover:bg-hoverColor 
            duration-300"
            >
              Resume
            </motion.button>
          </Link>
        </div>
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};
