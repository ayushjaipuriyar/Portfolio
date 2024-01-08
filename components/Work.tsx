import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface Props {
  Name: String;
  Type: String;
  Duration: String;
  Points: String[];
}
const Work = ({ Name, Type, Duration, Points }: Props) => {
  const bullet = (
    <span className="text-bullet mt-1">
      <TiArrowForward />
    </span>
  );
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex flex-row items-center gap-1 text-xl font-titleFont">
        {Type}
        <span className="text-3xl font-bold text-bullet tracking-wide">
          {Name}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium ">{Duration}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {Points.map((point, i) => (
          <li className="text-base flex gap-2 text-[#eee]" key={i}>
            {bullet}
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Work;
