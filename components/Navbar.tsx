import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Footer from "./Footer";
export const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setshowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setshowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  const NavLinkStyle =
    "items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 text-xl nav-link";
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
            <Link href="#home" className={NavLinkStyle} onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link onClick={handleScroll} className={NavLinkStyle} href="#about">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className={NavLinkStyle}
              href="#experience"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className={NavLinkStyle}
              href="#project"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Project
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className={NavLinkStyle}
              href="#contact"
            >
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
        <div
          onClick={() => setshowMenu(!showMenu)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[80%] h-full overflow-y-scoll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setshowMenu(!showMenu)}
                className="text-3x; text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <ul className="flex flex-col gap-7 justify-center items-center">
                  <Link
                    href="#home"
                    className={NavLinkStyle}
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className={NavLinkStyle}
                    href="#about"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className={NavLinkStyle}
                    href="#experience"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.3, ease: "easeIn" }}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className={NavLinkStyle}
                    href="#project"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.4, ease: "easeIn" }}
                    >
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className={NavLinkStyle}
                    href="#contact"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <Link href="/api/getAPI" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen border border-textGreen hover:bg-hoverColor duration-300 mt-4"
                  >
                    Resume
                  </motion.button>
                </Link>
                <Footer text="nav" />
                <a href="mailto:ayushjaipuriyar21@gmail.com">
                  <p className="flex text-lg w-40 tracking-wide items-center justify-center text-textGreen hover:text-textYellow duration-300 transition-all">
                    Email me
                  </p>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
