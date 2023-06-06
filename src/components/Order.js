import React from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";

const containerVariant = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 1.1, 1.2, 1.1, 1],
    transition: { delay: 1, duration: 1, type: "spring", stiffness: 300 },
  },
};

const topVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { duration: 1 },
  },
};

const leftVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

const bottomVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { duration: 1 },
  },
};

const rightVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <motion.div variants={topVariant} initial="hidden" animate="visible">
        <BsCheck2Circle fontSize={"3rem"} />
      </motion.div>
      <motion.h2
        variants={leftVariant}
        initial="hidden"
        animate="visible"
        style={{ marginTop: "10px" }}
      >
        Thank you for your order!
      </motion.h2>
      <motion.p variants={rightVariant} initial="hidden" animate="visible">
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={bottomVariant} initial="hidden" animate="visible">
        {pizza.toppings.length > 0 ? (
          pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)
        ) : (
          <div>No Toppings!</div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Order;
