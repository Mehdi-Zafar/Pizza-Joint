import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: "0",
    transition: { duration: 1, type: "spring", stiffness: 100, damping: 12 },
  },
  exit: { y: "-100vh" },
};

const btnVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: "0",
    transition: { duration: 1, type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    scale: "1.1",
    boxShadow: "2px 2px 12px silver",
    textShadow: "2px 2px 12px white",
    transition: { duration: 0.3 },
  },
  tap: { scale: "0.9" },
  exit: { y: "100vh" },
};

const textHoverVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    color: "gold",
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="container">
      <motion.div
        className="base"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <motion.li
                key={base}
                onClick={() => addBase(base)}
                variants={textHoverVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={spanClass}>{base}</span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              variants={btnVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              exit="exit"
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
