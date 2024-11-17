import { animate, delay, motion, reverseEasing } from "framer-motion";
import React from "react";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reverseIndex = (Index) => {
  const totalSteps = 6;
  return totalSteps - Index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, Index) => {
        <motion.div
          key={Index}
          variants={stairAnimation}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(Index) * 0.2,
          }}
          className="h-full w-full bg-white relative"
        />;
      })}
    </>
  );
};

export default Stairs;
