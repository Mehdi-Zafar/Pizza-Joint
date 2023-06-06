import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: "0",
    transition: { duration: "1", type: "spring", stiffness: 50, damping: 10 },
  },
  exit: { y: "-100vh" },
};

const btnVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: "0",
    transition: { duration: "1", type: "spring", stiffness: 50, damping: 10 },
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="toppings"
      >
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping) ? "active" : "";
            return (
              <motion.li
                key={topping}
                onClick={() => addTopping(topping)}
                variants={textHoverVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
      <Link to="/order">
        <motion.button
          variants={btnVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          exit="exit"
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
