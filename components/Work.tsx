import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const Work = () => {
  const bullet = (
    <span className="text-textGreen mt-1">
      <TiArrowForward />
    </span>
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Type
        <span className="text-textGreen tracking-wide">COMAPINY ANEM</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">WORKING DURATION</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li>{bullet}dsskdsdisn</li>
      </ul>
    </motion.div>
  );
};

export default Work;
